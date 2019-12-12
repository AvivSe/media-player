import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './User';
import { CreateUserDto } from '../dto/CreateUserDto';
import { UpdateUserDto } from '../dto/UpdateUserDto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto = { ...createUserDto, password: await bcrypt.hash(createUserDto.password, 10) };
    const createUser = new this.userModel(createUserDto);
    return createUser.save().catch(err => {
      if (!!err && err.name === 'MongoError' && err.code === 11000) {
        throw new ConflictException('User already exists');
      } else {
        throw err;
      }
    });
  }

  async findOne(username: string) {
    return this.userModel.findOne({ username });
  }

  async findOneAllowPassword(username: string) {
    return this.userModel
      .findOne({ username })
      .select('+password')
      .exec();
  }

  async find(): Promise<User[]> {
    return await this.userModel.find();
  }

  async put(username: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findOneAndUpdate({ username }, updateUserDto, { new: true });
  }

  async delete(userNames: string[]): Promise<any> {
    return this.userModel.remove({ username: userNames });
  }
}
