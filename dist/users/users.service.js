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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        createUserDto = Object.assign(Object.assign({}, createUserDto), { password: await bcrypt.hash(createUserDto.password, 10) });
        const createUser = new this.userModel(createUserDto);
        return createUser.save().catch(err => {
            if (!!err && err.name === 'MongoError' && err.code === 11000) {
                throw new common_1.ConflictException('User already exists');
            }
            else {
                throw err;
            }
        });
    }
    async findOne(username) {
        return this.userModel.findOne({ username });
    }
    async findOneAllowPassword(username) {
        return this.userModel
            .findOne({ username })
            .select('+password')
            .exec();
    }
    async find() {
        return this.userModel.find();
    }
    async count() {
        return this.userModel.countDocuments();
    }
    async update(username, updateUserDto) {
        return this.userModel.findOneAndUpdate({ username }, updateUserDto, { new: true });
    }
    async updateMany(usernames, updateUserDto) {
        return this.userModel.updateMany({ username: usernames }, updateUserDto, { new: true });
    }
    async deleteOne(username) {
        return this.userModel.deleteOne({ username }).then(res => {
            if (res.ok !== 1 || res.deletedCount === 0) {
                throw new common_1.InternalServerErrorException('Deletion failed');
            }
            return res;
        });
    }
    async delete(userNames) {
        return this.userModel.remove({ username: userNames });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map