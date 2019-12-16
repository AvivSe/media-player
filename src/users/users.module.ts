import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from './user.schema';
import { UsersController } from './users.controller';
import { ReportModule } from '../reports/report.module';

@Module({
  providers: [UserService],
  controllers: [UsersController],
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), forwardRef(() => ReportModule)],
  exports: [UserService],
})
export class UsersModule {}
