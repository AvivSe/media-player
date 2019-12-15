import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './SignInDto';
import { SignUpDto } from './SignUpDto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(signInDto: SignInDto): Promise<{
        token: string;
        profile: import("../users/User").User;
    }>;
    signUp(signUpDto: SignUpDto): Promise<{
        token: string;
        profile: import("../users/User").User;
        _id: string;
        username: string;
        password: string;
        lastLogin: Date;
        firstName: string;
        lastName: string;
        topSearches: Map<string, number>;
    }>;
}
