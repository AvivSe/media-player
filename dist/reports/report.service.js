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
const users_service_1 = require("../users/users.service");
let ReportService = class ReportService {
    constructor(userService, searchEntry) {
        this.userService = userService;
        this.searchEntry = searchEntry;
    }
    async report(username, keywords) {
        return this.searchEntry.findOne({ username, keywords }).then(async (res) => {
            if (!res) {
                res = new this.searchEntry({ username, keywords, count: 0 });
            }
            res.count += 1;
            res.save();
            return this.getUserTopSearches(username);
        });
    }
    async getUserTopSearches(username) {
        return this.searchEntry
            .find({ username }, null, {
            sort: { count: -1 },
            limit: 10,
        })
            .then(searchReports => {
            return searchReports.reduce((prev, curr) => {
                prev[curr.keywords] = curr.count;
                return prev;
            }, {});
        })
            .then(topSearches => this.userService.update(username, { topSearches }))
            .then(user => user.topSearches);
    }
    async deleteAllOfEachUserRecords(usernames) {
        return this.searchEntry.remove({ username: usernames });
    }
    async deleteOneOfMyTopSearches(username, keywords) {
        return this.searchEntry.deleteOne({ username, keywords }).then(() => this.getUserTopSearches(username));
    }
};
ReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_1.InjectModel('SearchEntry')),
    __metadata("design:paramtypes", [users_service_1.UserService, typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ReportService);
exports.ReportService = ReportService;
//# sourceMappingURL=report.service.js.map