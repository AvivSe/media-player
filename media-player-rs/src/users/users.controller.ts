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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/CreateUserDto';
import { UpdateUserDto } from '../dto/UpdateUserDto';

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

  @Get(':username')
  async findOne(@Param('username') username: string) {
    return this.userService.findOne(username).then(this.handleNoSuchEntity);
  }

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

  @Put()
  async put(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.put(updateUserDto).then(this.handleNoSuchEntity);
  }
}
