import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import{MongooseModule}from '@nestjs/mongoose';
import{UserSchema} from'./schemas/user.schema';
import{TicketSchema}from'./schemas/ticket.schema';
import{LoginSchema}from'./schemas/login.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'User',schema:UserSchema}]),MongooseModule.forFeature([{name:'Ticket',schema:TicketSchema}]),MongooseModule.forFeature([{name:'Login',schema:LoginSchema}])],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}
