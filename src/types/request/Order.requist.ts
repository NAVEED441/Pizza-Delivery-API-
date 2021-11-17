import { PizzaInterface } from "../pizza.interface";
export interface SaveReqOrder {
    Pizza: PizzaInterface[];
    ClientId: string;
    Delivery:number;
    Bill:number;
    TotalBill:number
}
export interface UpdateReqOrder{
    _id:string;
     Pizza: PizzaInterface[];
     ClientId: string;
     Delivery:number;
     Bill:number;
     TotalBill:number
}
export interface GetReqOrder{
    Id:string;
}