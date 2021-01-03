import { Body, Injectable, NotFoundException} from '@nestjs/common';
import { debug } from 'console';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {User} from './interfaces/user.interface';
import {UserDTO} from'./dto/user.dto';
import {LoginDTO} from'./dto/login.dto';
import {Ticket} from './interfaces/ticket.interface';
import {Login} from './interfaces/login.interface';
import {TicketDTO} from'./dto/ticket.dto';


@Injectable()
export class TicketService {
    constructor(@InjectModel('Ticket') private readonly ticketModel:Model<Ticket>,
    @InjectModel('User') private readonly userModel:Model<User>,
    @InjectModel('Login') private readonly LoginModel:Model<Login>){}

        
    async newUser(userDTO:UserDTO):Promise<User>{
    const newUser= await new this.userModel(userDTO);
    const seat=userDTO.seatnumber;
    if(await this.ticketModel.findOne({seatnumber:seat}))
            throw console.error("Seat already booked");
        else{  
        const ticket=this.ticketModel.insertMany({seatnumber:seat,isbooked:true});
        return newUser.save();
        }
 }
 

 
 async newLogin(LoginDTO:LoginDTO):Promise<Login>{
    if(this.LoginModel.find({email:LoginDTO.email}))
    {
        return null;
    }

    const newLogin= await new this.LoginModel(LoginDTO);
     await newLogin.save();
     return newLogin;
}

 


async userlogin(){
    return await this.LoginModel.find();
}




async Ticketstatusopen(){
    return await this.ticketModel.find({isbooked:false});
}


async Ticketstatusclose(){
    return await this.ticketModel.find({isbooked:true});
}

async admin(ticketDTO:TicketDTO):Promise<Ticket>{
    return await this.ticketModel.updateMany({},{$set: {isbooked:true}})
}
async getticketdetails(ID: number): Promise<Ticket> {
    const ticket= await this.ticketModel.findById(ID).exec();
    return ticket;
}

async passengerdetail(ID:number){
    const passenger=await this.getticketdetails(ID);
    let seat=passenger.seatnumber;
    return await this.userModel.find({seatnumber:seat})
}

async updateTicketStatus(ticketID: string, ticketDTO: TicketDTO): Promise<Ticket> {
    const updatedTicket = await this.ticketModel
                        .findByIdAndUpdate(ticketID, ticketDTO, {new: true});
    return updatedTicket;
}

}
 

