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
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/CreateUserDto';
import { UpdateUserDto } from '../dto/UpdateUserDto';
import { AuthGuard } from '@nestjs/passport';
import { ChangeUserParamDto } from '../dto/ChangeUserParamDto';
import * as bcrypt from 'bcrypt';

//@UseGuards(AuthGuard('jwt'))
@Controller('api/user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

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
    return this.userService.put(username, copyDto || updateUserDto).then(this.handleNoSuchEntity);
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
