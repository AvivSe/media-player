"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
exports.Exceptions = {
    NOT_OK: 'NOT_OK',
    ENTITIES_UNDEFINED: 'ENTITIES_UNDEFINED',
    FORBIDDEN: 'FORBIDDEN',
};
let MediaSearchService = class MediaSearchService {
    async search(params) {
        const { status, data } = await axios_1.default.get('https://itunes.apple.com/search', { params });
        if (status !== common_1.HttpStatus.OK) {
            throw new Error(exports.Exceptions[status] || exports.Exceptions.NOT_OK);
        }
        if (!data) {
            throw new Error(exports.Exceptions.ENTITIES_UNDEFINED);
        }
        const response = data;
        response.lastRow = -1;
        if (data.resultCount < Number(params.limit)) {
            response.lastRow = data.resultCount + Number(params.offset);
        }
        return response;
    }
};
MediaSearchService = __decorate([
    common_1.Injectable()
], MediaSearchService);
exports.MediaSearchService = MediaSearchService;
//# sourceMappingURL=media-search.service.js.map