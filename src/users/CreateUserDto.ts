import { IsEmail, IsOptional, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  username: string;

  @MaxLength(12)
  @MinLength(4)
  password: string;

  @IsOptional()
  @MaxLength(35)
  readonly firstName: string;

  @IsOptional()
  @MaxLength(35)
  readonly lastName: string;
}
