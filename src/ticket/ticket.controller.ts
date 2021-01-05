import { Body, Controller,HttpStatus,Post, Res,Param, NotFoundException, Get,Put,Query} from '@nestjs/common';
import{TicketService}from'./ticket.service';
import{UserDTO} from './dto/user.dto';
import{LoginDTO} from './dto/login.dto';
import{TicketDTO} from './dto/ticket.dto';

@Controller('ticket')
export class TicketController {
constructor(private ticketService:TicketService) {}

@Post('/newuser')
async add(@Res() res, @Body() userDTO:UserDTO,ticketDTO:TicketDTO)
{
    const newbooking=await this.ticketService.newUser(userDTO);
    return res.json(newbooking);
}


@Post('/newlogin')
async newlogin(@Res() res, @Body() LoginDTO:LoginDTO)
{
    const login=await this.ticketService.newLogin(LoginDTO);

    console.log(login);

    if(login===null)
    {
    res.json('User Already found');
    }
    else
    {
    res.json(login);
    }
}










@Get('/ticketstatus/open')
async openTicket(@Res() res){
    const open=await this.ticketService.Ticketstatusopen();
    res.json(open);
}


@Get('/ticketstatus/close')
async closeTicket(@Res() res){
    const close=await this.ticketService.Ticketstatusclose();
    res.json(close);
}



@Get('/login')
async userlogin(@Res() res){
    const log=await this.ticketService.userlogin();
    res.json(log);
}





@Post('/admin')
async admin(@Res() res ,@Body() body,ticketDTO:TicketDTO){
    const username="admin";
    const password="admin";
    if(body.username==username && body.password==password){
        const reset=await this.ticketService.admin(ticketDTO);
        return res.send('Tickets are free now');
}else{res.send("Admin details are not valid")}
}


@Get('/:id')
    public async getTicket(@Res() res, @Param() param){
        const ticket = await this.ticketService.getticketdetails(param.id);
        return res.status(HttpStatus.OK).json(ticket);
    }


@Get('/details/:id')
public async getTicketdetails(@Res() res, @Param() param){
    const ticket = await this.ticketService.passengerdetail(param.id);
        return res.status(HttpStatus.OK).json(ticket);
    }

@Put('/update')
async updateTicket(@Res() res, @Body() ticketDTO: TicketDTO, @Query('ticketID') ticketID) {
    const updatedTicket = await this.ticketService.updateTicketStatus(ticketID, ticketDTO);
    if (!updatedTicket) throw new NotFoundException('Enter a valid ticket for update');
        return res.status(HttpStatus.OK).json({
            message: 'Ticket Updated Successfully',
            updatedTicket 
        });
    }

}



