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
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("../auth/auth.service");
const SignInDto_1 = require("../auth/SignInDto");
const SignUpDto_1 = require("../auth/SignUpDto");
const media_search_service_1 = require("../media-search-service/media-search.service");
const report_service_1 = require("../reports/report.service");
const DeleteTopSearchRequest_1 = require("../media-search-service/DeleteTopSearchRequest");
let AppController = class AppController {
    constructor(mediaSearchService, authService, reportService) {
        this.mediaSearchService = mediaSearchService;
        this.authService = authService;
        this.reportService = reportService;
    }
    deleteOneOfMyTopSearches({ keywords }, request) {
        return this.reportService.deleteOneOfMyTopSearches(request.user.username, keywords);
    }
    getMyTopSearches(request) {
        return this.reportService.getUserTopSearches(request.user.username);
    }
    search(term, offset, limit, request) {
        if (!term) {
            throw new common_1.BadRequestException('Keywords params is required');
        }
        if (offset === 0) {
            this.reportService
                .report(request.user.username, term).catch(e => console.warn(e));
        }
        try {
            return this.mediaSearchService.search({ offset, limit, term });
        }
        catch (e) {
            throw new common_1.HttpException({ error: 'Something went wrong' }, Number(common_1.HttpStatus[e]) || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async login(signInDto) {
        return this.authService.login(signInDto);
    }
    async signUp(signUpDto) {
        if (signUpDto.retypePassword !== signUpDto.password) {
            throw new common_1.BadRequestException('passwords do not math');
        }
        return this.authService.signUp(signUpDto);
    }
    getProfile(req) {
        return req.user;
    }
    healthCheck() {
        return true;
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Delete('top'),
    __param(0, common_1.Query()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteTopSearchRequest_1.DeleteTopSearchRequest, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteOneOfMyTopSearches", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get('top'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getMyTopSearches", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get('search'),
    __param(0, common_1.Query('keywords')),
    __param(1, common_1.Query('offset')),
    __param(2, common_1.Query('limit')),
    __param(3, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "search", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('local')),
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SignInDto_1.SignInDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.Post('signup'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SignUpDto_1.SignUpDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "signUp", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get('profile'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], AppController.prototype, "healthCheck", null);
AppController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [media_search_service_1.MediaSearchService,
        auth_service_1.AuthService,
        report_service_1.ReportService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map