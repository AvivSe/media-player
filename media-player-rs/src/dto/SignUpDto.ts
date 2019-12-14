import { IsEmail, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  username: string;

  @MaxLength(12)
  @MinLength(4)
  password: string;

  @MaxLength(12)
  @MinLength(4)
  retypePassword: string;

  @MaxLength(35)
  @MinLength(2)
  readonly firstName: string;

  @MaxLength(35)
  @MinLength(2)
  readonly lastName: string;
}
