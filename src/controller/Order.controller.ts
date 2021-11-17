import { IORDER } from "../types/document/IOrder";
import { SaveReqOrder,UpdateReqOrder,GetReqOrder } from "../types/request/Order.requist";
import { Tags,Post,Route,Body,SuccessResponse,Get,Put,Security } from "tsoa";
import MainOrder from "../repositries/Order.repositries";
import CustomeError from '../utills/error';
import { SaveUpdateResOrder } from "../types/responce/Order.responce";
@Route('order')
@Tags('order')
export default class OrderController {
    constructor(){}
        @Post('/saveorder')
        async saveOrder(@Body() orderReq:SaveReqOrder): Promise<SaveUpdateResOrder>{
            const order:IORDER = await new MainOrder().saveOrder(<IORDER>orderReq);
            if(order ===null) throw new CustomeError(404 ,'Order Not Found');
            return <SaveUpdateResOrder>order;

    }
      @Put('/updateorder')
      async updateOrder(@Body() orderReq:UpdateReqOrder): Promise<SaveUpdateResOrder>{
            const updateOrder:IORDER = await new MainOrder().updateOrder(<IORDER>orderReq);
            if(updateOrder ===null) throw new CustomeError(404 ,'Order Not Found');
            return <SaveUpdateResOrder>updateOrder;
      }
      @Security("api_key")
      @Get('/getorder')
      async getOrder():Promise<SaveUpdateResOrder[]>{
          const getOrder:IORDER[] = await new MainOrder().getAllOrder();
          return <SaveUpdateResOrder[]>(getOrder);
      }
}