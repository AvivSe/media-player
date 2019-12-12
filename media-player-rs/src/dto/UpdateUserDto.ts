export interface UpdateUserDto {
  readonly username: string;
  readonly password: string;
  readonly lastLogin: Date;
  readonly firstName: string;
  readonly lastName: string;
  readonly topSearches: any[];
}
