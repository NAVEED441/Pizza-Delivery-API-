import { Document } from "mongoose";
export interface ICLIENT extends Document {
    _id:string;
     Name: string;
     UserName:string;
    cell: string;
    adress: string;
    Password:string;
    createdAt?: string;
    updatedAt?: string;
}