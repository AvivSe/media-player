import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './SignInDto';
import { SignUpDto } from './SignUpDto';
import { CreateUserDto } from '../users/CreateUserDto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneAllowPassword(username).then(res => {
      if (!res) {
        throw new UnauthorizedException('No match');
      } else {
        return res;
      }
    });
    if (user && bcrypt.compareSync(pass, user.password)) {
      return user;
    } else {
      throw new UnauthorizedException('No match');
    }
  }

  async login(signInDto: SignInDto) {
    return this.userService.update(signInDto.username, { lastLogin: new Date() }).then(user => {
      return {
        token: this.jwtService.sign(signInDto),
        profile: user,
      };
    });
  }

  async signUp(signUpDto: SignUpDto) {
    if (signUpDto.password !== signUpDto.retypePassword) {
      throw new BadRequestException('passwords do not match');
    } else {
      return await this.userService.create(signUpDto as CreateUserDto).then(async result => {
        return {
          ...result,
          ...(await this.login({ username: result.username, password: signUpDto.retypePassword })),
        };
      });
    }
  }
}
