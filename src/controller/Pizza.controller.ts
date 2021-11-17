import { IPIZZAITEM } from "../types/document/IPizzaItems";
import MainPizza from "../repositries/Pizza.repositries";
import { SaveUpdateResPizza } from "../types/responce/Pizza.responce";
import { Get, Route, Tags, Post, Body,  Put, Delete, SuccessResponse } from "tsoa";
import CustomeError from '../utills/error';
import { SaveReqPizza,UpdateReqPizza,DeletePizza } from "../types/request/Pizza.request";
@Route('pizza')
@Tags('pizza')
export default class PizzaController{
    constructor(){}
    @Post('/savepizaa')
    async SavePizza(@Body() PizzaReq:SaveReqPizza): Promise<SaveUpdateResPizza>{
        const new_Pizza:IPIZZAITEM = await new MainPizza().savePizza(<IPIZZAITEM>(PizzaReq));
        return <SaveUpdateResPizza>new_Pizza;
    }
    @Put('/updatepizza')
    async updatePiza(@Body() pizzareq:UpdateReqPizza): Promise<SaveUpdateResPizza>{
        const updatePizza:IPIZZAITEM = await new MainPizza().updatePizza(<IPIZZAITEM>(pizzareq));
        if(updatePizza ===null){
            throw new CustomeError('404', 'Pizza Not Found')
        }
        else{
            return <SaveUpdateResPizza>updatePizza;
        }
    }
    @Get('/getallpizza')
    async getALLPizza():Promise <SaveUpdateResPizza[]>{
        const PizzaItems:IPIZZAITEM[] = await new MainPizza().getALLPizza();
        return <SaveUpdateResPizza[]>(PizzaItems);

    }
    @Delete('/deletepizza')
    @SuccessResponse("200",'Pizza Deleted')
    async deletePizza(@Body() deletReq:DeletePizza){
       return await new MainPizza().deletPizza(deletReq.id);
    }
}