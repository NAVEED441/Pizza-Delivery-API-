import express from 'express';
import PizzaController from '../controller/Pizza.Controller';
import { UpdateReqPizza, SaveReqPizza,DeletePizza } from '../types/request/Pizza.request';
import { SaveUpdateResPizza } from '../types/responce/Pizza.responce';

export class PizzaRoutes{
    router:express.Router;
    constructor(){
        this.router = express.Router();
        this.routes();
    }
    routes(){
        this.router.post('/savepizaa', async(req,res,next)=>{
            try{
            const savePiza:SaveReqPizza = req.body;
            const new_pizza:SaveUpdateResPizza = await new PizzaController().SavePizza(savePiza);
            res.status(200).json({
                message:new_pizza
            });   
        }catch(error){
              next(error)
        }
    });
    this.router.put('/updatepizza',async(req,res,next)=>{
        try{
            const updtepzza:UpdateReqPizza = req.body;
            const UpdatedPizza:SaveUpdateResPizza = await new PizzaController().updatePiza(updtepzza);
            res.status(200).json({
                result:UpdatedPizza
            });
        }catch(error){
            next(error)
        }
    });
    this.router.get('/getallpizza', async(req,res,next)=>{
        try{
            const Getpizza:SaveUpdateResPizza[] = await new PizzaController().getALLPizza();
            res.status(200).json({
                result:Getpizza
            });
        }catch(error){
              next(error)
        }
    });
    this.router.delete('/deletepizza', async(req,res,next)=>{
        try {
            const delreq:DeletePizza = req.body;
            const Deleted_pizza = await new PizzaController().deletePizza(delreq);
            res.status(200).json({
              message: 'Pizza is delete'
              
            });
          } catch (error) {
            next(error);
          }
        });
    }
}
export const PizzaAPiRoutes = new PizzaRoutes().router;