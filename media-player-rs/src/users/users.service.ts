import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './User.model';
import { CreateUserDto } from '../dto/CreateUserDto';
import { UpdateUserDto } from '../dto/UpdateUserDto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto);
    return createUser.save();
  }

  async findOne(username: string) {
    return this.userModel.findOne({ username });
  }
  async find(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async put(updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findOneAndUpdate({ _id: updateUserDto._id }, updateUserDto);
  }

  async delete(ids: string[]): Promise<any> {
    return this.userModel.remove({ _id: ids });
  }
}
