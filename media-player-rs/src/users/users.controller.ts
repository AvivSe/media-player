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
  async put(@Param() {username}: ChangeUserParamDto, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.put(username, updateUserDto).then(this.handleNoSuchEntity);
  }

  @Get(':username')
  async findOne(@Param() {username}: ChangeUserParamDto) {
    return this.userService.findOne(username).then(this.handleNoSuchEntity);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async find() {
    return this.userService.find();
  }

  // @UseGuards(AuthGuard('local'))
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete()
  async delete(@Body() userNames: string[]) {
    return this.userService.delete(userNames);
  }
}
