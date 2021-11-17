import { Document } from "mongoose";
import { PizzaInterface } from "../pizza.interface";
export interface IORDER extends Document {
    _id:string;
     Pizza: PizzaInterface[];
     ClientId: string;
     Delivery:number;
     Bill:number;
     TotalBill:number
     createdAt?: string;
     updatedAt?: string;
}