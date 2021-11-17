import { Schema,model } from "mongoose";
import { IORDER } from "../types/document/IOrder";

const IORDERSchema = new Schema ({
    Pizza: [{
        pizzaId:{type:String},
        Quantity:{type:Number}
    }],
    ClientId: {type:String},
    Delivery:{type:Number},
    Bill:{type:Number},
    TotalBill:{type:Number}},
    {
        timestamps:true
    }
);
export const ORDERSchema =  model<IORDER>('IOrderSchema', IORDERSchema)