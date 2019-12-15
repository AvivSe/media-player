"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const SearchEntrySchema = new mongoose.Schema({
    username: String,
    keywords: String,
    count: Number,
});
exports.default = SearchEntrySchema;
//# sourceMappingURL=search-entry.schema.js.map