import express from 'express'
import OrderController from '../controller/Order.controller'
import { auth } from '../middleware/Auth'

import { SaveReqOrder,UpdateReqOrder,GetReqOrder } from '../types/request/Order.requist'
import { SaveUpdateResOrder } from '../types/responce/Order.responce'

export default class OrderRoutes{
    router :express.Router;
  constructor(){
      this.router=express.Router();
      this.routes()
  }
  routes(){
     this.router.post('/saveorder',auth, async(req,res,next)=>{
         try{
             const Order:SaveReqOrder = req.body;
             const saveOrder:SaveUpdateResOrder = await new OrderController().saveOrder(Order);
             res.status(200).json({
                 message:saveOrder
             });

         }
         catch(error){
          next(error)
         }
     });
     this.router.put('/updateorder',async(req,res,next)=>{
         try{
            const order:UpdateReqOrder = req.body;
            const updatedOrder:SaveUpdateResOrder = await new OrderController().updateOrder(order)
              res.status(200).json({
                  mesage:updatedOrder
              });

         }catch(error){
        next(error)
         }
     });

     this.router.get('/getorder',auth,async(req,res,next)=>{
         try{
            
             const getORDER:SaveUpdateResOrder[] = await new OrderController().getOrder();
             res.status(200).json({
                result: getORDER
              });
      
            } catch (error) {
              next(error);
            }
          });

         
   

  }
}
export const OrderRoutesApi = new OrderRoutes().router;