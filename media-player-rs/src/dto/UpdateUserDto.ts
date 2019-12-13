import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, IsOptional, IsEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  readonly username: string;

  @IsOptional()
  @MaxLength(12)
  @MinLength(4)
  @IsOptional()
  readonly password: string;

  @IsOptional()
  @MaxLength(35)
  @MinLength(4)
  @IsOptional()
  readonly firstName: string;

  @IsOptional()
  @MaxLength(35)
  @MinLength(4)
  @IsOptional()
  readonly lastName: string;

}
