"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const report_service_1 = require("./report.service");
const mongoose_1 = require("@nestjs/mongoose");
const search_entry_schema_1 = require("./search-entry.schema");
const users_module_1 = require("../users/users.module");
let ReportModule = class ReportModule {
};
ReportModule = __decorate([
    common_1.Module({
        providers: [report_service_1.ReportService],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'SearchEntry', schema: search_entry_schema_1.default }]), common_1.forwardRef(() => users_module_1.UsersModule)],
        exports: [report_service_1.ReportService],
    })
], ReportModule);
exports.ReportModule = ReportModule;
//# sourceMappingURL=report.module.js.map