import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from '../dto/SignInDto';
import { SignUpDto } from '../dto/SignUpDto';
import { CreateUserDto } from '../dto/CreateUserDto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from '../dto/UpdateUserDto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneAllowPassword(username).then(res => {
      if (!res) {
        throw new UnauthorizedException('1');
      } else {
        return res;
      }
    });
    if (user && bcrypt.compareSync(pass, user.password)) {
      return user;
    } else {
      throw new UnauthorizedException('2');
    }
  }

  async login(signInDto: SignInDto) {
    return this.usersService.put(signInDto.username, { lastLogin: new Date() } as UpdateUserDto).then(() => {
      return {
        token: this.jwtService.sign(signInDto),
      };
    });
  }

  async signUp(signUpDto: SignUpDto) {
    if (signUpDto.password !== signUpDto._password) {
      throw new BadRequestException('passwords do not match');
    } else {
      return await this.usersService
        .create(signUpDto as CreateUserDto)
        .then(async result => {
          return {
            ...result,
            ...await this.login({ username: result.username, password: signUpDto._password })
          };
        });
    }
  }
}
