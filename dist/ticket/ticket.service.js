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
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let TicketService = class TicketService {
    constructor(ticketModel, userModel, LoginModel) {
        this.ticketModel = ticketModel;
        this.userModel = userModel;
        this.LoginModel = LoginModel;
    }
    async newUser(userDTO) {
        const newUser = await new this.userModel(userDTO);
        const seat = userDTO.seatnumber;
        if (await this.ticketModel.findOne({ seatnumber: seat }))
            throw console.error("Seat already booked");
        else {
            const ticket = this.ticketModel.insertMany({ seatnumber: seat, isbooked: true });
            return newUser.save();
        }
    }
    async newLogin(LoginDTO) {
        const newLogin = await new this.LoginModel(LoginDTO);
        return await newLogin.save();
    }
    async userlogin() {
        return await this.LoginModel.find();
    }
    async Ticketstatusopen() {
        return await this.ticketModel.find({ isbooked: false });
    }
    async Ticketstatusclose() {
        return await this.ticketModel.find({ isbooked: true });
    }
    async admin(ticketDTO) {
        return await this.ticketModel.updateMany({}, { $set: { isbooked: true } });
    }
    async getticketdetails(ID) {
        const ticket = await this.ticketModel.findById(ID).exec();
        return ticket;
    }
    async passengerdetail(ID) {
        const passenger = await this.getticketdetails(ID);
        let seat = passenger.seatnumber;
        return await this.userModel.find({ seatnumber: seat });
    }
    async updateTicketStatus(ticketID, ticketDTO) {
        const updatedTicket = await this.ticketModel
            .findByIdAndUpdate(ticketID, ticketDTO, { new: true });
        return updatedTicket;
    }
};
TicketService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Ticket')),
    __param(1, mongoose_2.InjectModel('User')),
    __param(2, mongoose_2.InjectModel('Login')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map