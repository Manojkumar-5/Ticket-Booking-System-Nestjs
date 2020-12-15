import * as mongoose from 'mongoose';
export const LoginSchema=new mongoose.Schema({
    name:String,
    email:
    {
        type:String,
        unique:true
    },
   password:
   {
       type:String
   }
})
