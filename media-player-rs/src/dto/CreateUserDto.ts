import { IsEmail, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  username: string;

  @MaxLength(12)
  @MinLength(4)
  password: string;

  @MaxLength(35)
  @MinLength(4)
  readonly firstName: string;

  @MaxLength(35)
  @MinLength(4)
  readonly lastName: string;
}
