import { TicketService } from './ticket.service';
import { UserDTO } from './dto/user.dto';
import { LoginDTO } from './dto/login.dto';
import { TicketDTO } from './dto/ticket.dto';
export declare class TicketController {
    private ticketService;
    constructor(ticketService: TicketService);
    add(res: any, userDTO: UserDTO, ticketDTO: TicketDTO): Promise<any>;
    newlogin(res: any, LoginDTO: LoginDTO): Promise<any>;
    openTicket(res: any): Promise<void>;
    closeTicket(res: any): Promise<void>;
    userlogin(res: any): Promise<void>;
    admin(res: any, body: any, ticketDTO: TicketDTO): Promise<any>;
    getTicket(res: any, param: any): Promise<any>;
    getTicketdetails(res: any, param: any): Promise<any>;
    updateTicket(res: any, ticketDTO: TicketDTO, ticketID: any): Promise<any>;
}
