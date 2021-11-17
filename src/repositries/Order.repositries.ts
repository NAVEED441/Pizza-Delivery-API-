import { IORDER } from "../types/document/IOrder";
import { SaveReqOrder } from "../types/request/Order.requist";
import { ORDERSchema } from "../model/Order.model";
//import { orderProcess } from '../middleware/OrderProcess.middleware';

export default class MainOrder{
    constructor(){}
    getOrder(_id:string){
        return ORDERSchema.findById(_id);
    }
  async saveOrder(order:SaveReqOrder){
    //const updatedOrder = await orderProcess(order);
    //console.log(updatedOrder);
    return new ORDERSchema(order).save();
           }
    updateOrder(order:IORDER){
        return ORDERSchema.findByIdAndUpdate(order._id,order, {
            new: true
        });
    }
    getAllOrder(){
        return ORDERSchema.find();
    }       

}