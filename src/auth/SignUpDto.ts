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

  @IsOptional()
  @MaxLength(35)
  readonly firstName: string;

  @IsOptional()
  @MaxLength(35)
  readonly lastName: string;
}
