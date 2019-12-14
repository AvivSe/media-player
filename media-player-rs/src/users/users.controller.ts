import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
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

@UseGuards(AuthGuard('jwt'))
@Controller('api/user')
export class UsersController {
  constructor(private readonly userService: UserService) {}

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
    return this.userService.deleteOne(username);
  }

  @Delete()
  async delete(@Body() userNames: string[]) {
    return this.userService.delete(userNames);
  }
}
