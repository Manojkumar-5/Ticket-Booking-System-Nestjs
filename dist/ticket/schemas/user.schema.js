"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: String,
    gender: String,
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: Number,
        unique: true
    },
    from: String,
    To: String,
    seatnumber: Number
});
//# sourceMappingURL=user.schema.js.map