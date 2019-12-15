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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const CreateUserDto_1 = require("./CreateUserDto");
const UpdateUserDto_1 = require("./UpdateUserDto");
const passport_1 = require("@nestjs/passport");
const ChangeUserParamDto_1 = require("./ChangeUserParamDto");
const bcrypt = require("bcrypt");
const report_service_1 = require("../reports/report.service");
let UsersController = class UsersController {
    constructor(userService, reportService) {
        this.userService = userService;
        this.reportService = reportService;
    }
    handleNoSuchEntity(res) {
        if (!res) {
            throw new common_1.NotFoundException('no such entity');
        }
        else {
            return res;
        }
    }
    async put({ username }, updateUserDto) {
        let copyDto = null;
        if (updateUserDto.password) {
            copyDto = Object.assign(Object.assign({}, updateUserDto), { password: await bcrypt.hash(updateUserDto.password, 10) });
        }
        return this.userService.update(username, copyDto || updateUserDto).then(this.handleNoSuchEntity);
    }
    async findOne({ username }) {
        return this.userService.findOne(username).then(this.handleNoSuchEntity);
    }
    async find() {
        return {
            lastRow: await this.userService.count(),
            rows: await this.userService.find(),
        };
    }
    async create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    async deleteOne({ username }) {
        this.deleteReportsAllowExceptions([username]);
        return this.userService.deleteOne(username);
    }
    async delete(userNames) {
        this.deleteReportsAllowExceptions(userNames);
        return this.userService.delete(userNames);
    }
    deleteReportsAllowExceptions(usernames) {
        this.reportService.deleteAllOfEachUserRecords(usernames).catch(error => console.warn(error));
    }
};
__decorate([
    common_1.Put(':username'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChangeUserParamDto_1.ChangeUserParamDto, UpdateUserDto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "put", null);
__decorate([
    common_1.Get(':username'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChangeUserParamDto_1.ChangeUserParamDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "find", null);
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserDto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    common_1.Delete(':username'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChangeUserParamDto_1.ChangeUserParamDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteOne", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
UsersController = __decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Controller('api/user'),
    common_1.Injectable(),
    __param(1, common_1.Inject(common_1.forwardRef(() => report_service_1.ReportService))),
    __metadata("design:paramtypes", [users_service_1.UserService,
        report_service_1.ReportService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map