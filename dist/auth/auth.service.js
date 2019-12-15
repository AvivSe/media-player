"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(username, pass) {
        const user = await this.userService.findOneAllowPassword(username).then(res => {
            if (!res) {
                throw new common_1.UnauthorizedException('No match');
            }
            else {
                return res;
            }
        });
        if (user && bcrypt.compareSync(pass, user.password)) {
            return user;
        }
        else {
            throw new common_1.UnauthorizedException('No match');
        }
    }
    async login(signInDto) {
        return this.userService.update(signInDto.username, { lastLogin: new Date() }).then(user => {
            return {
                token: this.jwtService.sign(signInDto),
                profile: user,
            };
        });
    }
    async signUp(signUpDto) {
        if (signUpDto.password !== signUpDto.retypePassword) {
            throw new common_1.BadRequestException('passwords do not match');
        }
        else {
            return await this.userService.create(signUpDto).then(async (result) => {
                return Object.assign(Object.assign({}, result), (await this.login({ username: result.username, password: signUpDto.retypePassword })));
            });
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UserService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map