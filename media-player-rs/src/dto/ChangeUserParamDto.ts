import { IsEmail } from 'class-validator';

export class ChangeUserParamDto {
  @IsEmail()
  readonly username: string;
}
