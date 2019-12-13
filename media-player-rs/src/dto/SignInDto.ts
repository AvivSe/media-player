import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class SignInDto {
  @IsEmail()
  username: string;

  @MaxLength(12)
  @MinLength(4)
  password: string;
}
