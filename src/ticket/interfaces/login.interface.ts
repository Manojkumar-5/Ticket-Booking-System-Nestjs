import {Document} from 'mongoose';
export interface Login extends Document{
    readonly name:string;
    readonly email:string;
    readonly password:string
}