import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from './user.schema';
import { UsersController } from './users.controller';

@Module({
  providers: [UserService],
  controllers: [UsersController],
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  exports: [UserService],
})
export class UsersModule {}
