import { PizzaInterface } from "../pizza.interface";

export interface SaveUpdateResOrder{
    _id:string;
     Pizza: PizzaInterface [];
     ClientId: string;
     Delivery:number;
     Bill:number;
     TotalBill:number
     createdAt?: string;
     updatedAt?: string;
}
