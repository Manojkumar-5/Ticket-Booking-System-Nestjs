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
exports.TicketController = void 0;
const common_1 = require("@nestjs/common");
const ticket_service_1 = require("./ticket.service");
const user_dto_1 = require("./dto/user.dto");
const login_dto_1 = require("./dto/login.dto");
const ticket_dto_1 = require("./dto/ticket.dto");
let TicketController = class TicketController {
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    async add(res, userDTO, ticketDTO) {
        const newbooking = await this.ticketService.newUser(userDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Ticket Booking Successful',
            post: newbooking
        });
    }
    async newlogin(res, LoginDTO) {
        const newlogin = await this.ticketService.newLogin(LoginDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'User Login Successfull',
            post: newlogin
        });
    }
    async openTicket(res) {
        const open = await this.ticketService.Ticketstatusopen();
        res.json(open);
    }
    async closeTicket(res) {
        const close = await this.ticketService.Ticketstatusclose();
        res.json(close);
    }
    async userlogin(res) {
        const log = await this.ticketService.userlogin();
        res.json(log);
    }
    async admin(res, body, ticketDTO) {
        const username = "admin";
        const password = "admin";
        if (body.username == username && body.password == password) {
            const reset = await this.ticketService.admin(ticketDTO);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Tickets are free now - Admin'
            });
        }
        else {
            res.send("Admin details are not valid");
        }
    }
    async getTicket(res, param) {
        const ticket = await this.ticketService.getticketdetails(param.id);
        return res.status(common_1.HttpStatus.OK).json(ticket);
    }
    async getTicketdetails(res, param) {
        const ticket = await this.ticketService.passengerdetail(param.id);
        return res.status(common_1.HttpStatus.OK).json(ticket);
    }
    async updateTicket(res, ticketDTO, ticketID) {
        const updatedTicket = await this.ticketService.updateTicketStatus(ticketID, ticketDTO);
        if (!updatedTicket)
            throw new common_1.NotFoundException('Enter a valid ticket for update');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Ticket Updated Successfully',
            updatedTicket
        });
    }
};
__decorate([
    common_1.Post('/newuser'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UserDTO, ticket_dto_1.TicketDTO]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "add", null);
__decorate([
    common_1.Post('/newlogin'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, login_dto_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "newlogin", null);
__decorate([
    common_1.Get('/ticketstatus/open'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "openTicket", null);
__decorate([
    common_1.Get('/ticketstatus/close'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "closeTicket", null);
__decorate([
    common_1.Get('/login'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "userlogin", null);
__decorate([
    common_1.Post('/admin'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, ticket_dto_1.TicketDTO]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "admin", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getTicket", null);
__decorate([
    common_1.Get('/details/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getTicketdetails", null);
__decorate([
    common_1.Put('/update'),
    __param(0, common_1.Res()), __param(1, common_1.Body()), __param(2, common_1.Query('ticketID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ticket_dto_1.TicketDTO, Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "updateTicket", null);
TicketController = __decorate([
    common_1.Controller('ticket'),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketController);
exports.TicketController = TicketController;
//# sourceMappingURL=ticket.controller.js.map