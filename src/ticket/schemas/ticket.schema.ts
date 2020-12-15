import * as mongoose from 'mongoose';
export const TicketSchema= new mongoose.Schema({
    seatnumber:
    {
        type:Number,
        min:1,
        max:40,
        required:true
    },
    isbooked:{
        type:Boolean,
    }

})