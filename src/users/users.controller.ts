import {
  Body,
  Controller,
  Delete,
  forwardRef,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './CreateUserDto';
import { UpdateUserDto } from './UpdateUserDto';
import { AuthGuard } from '@nestjs/passport';
import { ChangeUserParamDto } from './ChangeUserParamDto';
import * as bcrypt from 'bcrypt';
import { ReportService } from '../reports/report.service';

@UseGuards(AuthGuard('jwt'))
@Controller('api/user')
@Injectable()
export class UsersController {
  constructor(
    private readonly userService: UserService,
    @Inject(forwardRef(() => ReportService))
    private readonly reportService: ReportService,
  ) {}

  handleNoSuchEntity(res) {
    if (!res) {
      throw new NotFoundException('no such entity');
    } else {
      return res;
    }
  }

  @Put(':username')
  async put(@Param() { username }: ChangeUserParamDto, @Body() updateUserDto: UpdateUserDto) {
    let copyDto = null;
    if (updateUserDto.password) {
      copyDto = { ...updateUserDto, password: await bcrypt.hash(updateUserDto.password, 10) };
    }
    return this.userService.update(username, copyDto || updateUserDto).then(this.handleNoSuchEntity);
  }

  @Get(':username')
  async findOne(@Param() { username }: ChangeUserParamDto) {
    return this.userService.findOne(username).then(this.handleNoSuchEntity);
  }

  @Get()
  async find() {
    return {
      lastRow: await this.userService.count(),
      rows: await this.userService.find(),
    };
  }

  // @UseGuards(AuthGuard('local'))
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete(':username')
  async deleteOne(@Param() { username }: ChangeUserParamDto) {
    this.deleteReportsAllowExceptions([username]);
    return this.userService.deleteOne(username);
  }

  @Delete()
  async delete(@Body() userNames: string[]) {
    this.deleteReportsAllowExceptions(userNames);
    return this.userService.delete(userNames);
  }

  deleteReportsAllowExceptions(usernames: string[]) {
    this.reportService.deleteAllOfEachUserRecords(usernames).catch(error => console.warn(error));
  }
}
