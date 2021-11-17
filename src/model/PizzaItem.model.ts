import { Schema, model } from "mongoose";
import { IPIZZAITEM } from "../types/document/IPizzaItems";

const IPizzaSchema = new Schema({
    PizzaName:{type:String},
    Price:{type:String}
},{
    timestamps:true
})
export const PizzaSchema = model<IPIZZAITEM>('IPizzaSchema', IPizzaSchema);