"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketModule = void 0;
const common_1 = require("@nestjs/common");
const ticket_controller_1 = require("./ticket.controller");
const ticket_service_1 = require("./ticket.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const ticket_schema_1 = require("./schemas/ticket.schema");
const login_schema_1 = require("./schemas/login.schema");
let TicketModule = class TicketModule {
};
TicketModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_schema_1.UserSchema }]), mongoose_1.MongooseModule.forFeature([{ name: 'Ticket', schema: ticket_schema_1.TicketSchema }]), mongoose_1.MongooseModule.forFeature([{ name: 'Login', schema: login_schema_1.LoginSchema }])],
        controllers: [ticket_controller_1.TicketController],
        providers: [ticket_service_1.TicketService]
    })
], TicketModule);
exports.TicketModule = TicketModule;
//# sourceMappingURL=ticket.module.js.map