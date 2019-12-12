import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  username: string;

  @IsNotEmpty()
  password: string;
}
