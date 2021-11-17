import { Document } from "mongoose";
export interface IPIZZAITEM extends Document {
    _id:string;
     PizzaName: string;
     Price:string;
    createdAt?: string;
    updatedAt?: string;
}