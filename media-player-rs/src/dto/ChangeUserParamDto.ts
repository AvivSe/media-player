import { IsEmail } from 'class-validator';

export interface ChangeUserParamDto {
  readonly username: string;
}
