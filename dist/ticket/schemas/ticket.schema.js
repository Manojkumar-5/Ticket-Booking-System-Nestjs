"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketSchema = void 0;
const mongoose = require("mongoose");
exports.TicketSchema = new mongoose.Schema({
    seatnumber: {
        type: Number,
        min: 1,
        max: 40,
        required: true
    },
    isbooked: {
        type: Boolean,
    }
});
//# sourceMappingURL=ticket.schema.js.map