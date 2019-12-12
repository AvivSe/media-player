import { IsEmail, IsNotEmpty , IsString, Min, Max} from 'class-validator';

export interface UpdateUserDto {
  readonly username: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastLogin: Date;
  readonly lastName: string;
  readonly topSearches: any[];
}
