"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = void 0;
const mongoose = require("mongoose");
exports.LoginSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
});
//# sourceMappingURL=login.schema.js.map