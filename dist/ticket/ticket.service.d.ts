import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { UserDTO } from './dto/user.dto';
import { LoginDTO } from './dto/login.dto';
import { Ticket } from './interfaces/ticket.interface';
import { Login } from './interfaces/login.interface';
import { TicketDTO } from './dto/ticket.dto';
export declare class TicketService {
    private readonly ticketModel;
    private readonly userModel;
    private readonly LoginModel;
    constructor(ticketModel: Model<Ticket>, userModel: Model<User>, LoginModel: Model<Login>);
    newUser(userDTO: UserDTO): Promise<User>;
    newLogin(LoginDTO: LoginDTO): Promise<Login>;
    userlogin(): Promise<Login[]>;
    Ticketstatusopen(): Promise<Ticket[]>;
    Ticketstatusclose(): Promise<Ticket[]>;
    admin(ticketDTO: TicketDTO): Promise<Ticket>;
    getticketdetails(ID: number): Promise<Ticket>;
    passengerdetail(ID: number): Promise<User[]>;
    updateTicketStatus(ticketID: string, ticketDTO: TicketDTO): Promise<Ticket>;
}
