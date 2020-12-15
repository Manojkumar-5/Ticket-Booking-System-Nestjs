import { Document } from 'mongoose';
export interface User extends Document {
    readonly name: string;
    readonly gender: string;
    readonly email: string;
    readonly phone: number;
    readonly from: string;
    readonly to: string;
    readonly seatnumber: number;
}
