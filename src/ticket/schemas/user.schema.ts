import * as mongoose from 'mongoose';
export const UserSchema=new mongoose.Schema({
    name:String,
    gender:String,
    email:
    {
        type:String,
        unique:true
    },
    phone:
    {
        type:Number,
        unique:true
    },
    from:String,
    To:String,
    seatnumber:Number
})
