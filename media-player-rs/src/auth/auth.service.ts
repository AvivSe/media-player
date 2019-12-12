import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from '../dto/SignInDto';
import bcrypt from 'bcrypt';
import { SignUpDto } from '../dto/SignUpDto';
import { CreateUserDto } from '../dto/CreateUserDto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username).then(res => {
      if (!res) {
        throw new UnauthorizedException('1');
      } else {
        return res;
      }
    });
    if (user && (await bcrypt.hash(pass, 10)) === user.pass) {
      return user;
    } else {
      throw new UnauthorizedException('2');
    }
  }

  async login(userLoginDto: SignInDto) {
    return {
      access_token: this.jwtService.sign(userLoginDto),
    };
  }

  async signUp(signUpDto: SignUpDto) {
    if (signUpDto.password !== signUpDto._password) {
      throw new BadRequestException('passwords do not match');
    } else {
      return await this.usersService.create(signUpDto as CreateUserDto);
    }
  }
}
