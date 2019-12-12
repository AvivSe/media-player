import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Query,
  Request,
  Post,
  UseGuards,
  BadRequestException,
  HttpCode, Body, Delete, Put,
} from '@nestjs/common';
import MediaSearchService, { Response as MediaSearchResponse } from '../media-search/media-search.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/CreateUserDto';
import { UpdateUserDto } from '../dto/UpdateUserDto';

@Controller('api/user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // @UseGuards(AuthGuard('local'))
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete()
  async delete(@Body() userNames: string[]) {
    return this.userService.delete(userNames);
  }

  @Put()
  async put(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.put(updateUserDto);
  }

  @Get()
  async getProfile() {
    return this.userService.find();
  }
}
