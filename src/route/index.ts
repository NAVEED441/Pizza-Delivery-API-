import express from 'express';
import { ClientRoutesApi } from './Client.route';
import { PizzaAPiRoutes } from './Pizza.routes';
import { OrderRoutesApi } from './Order.routes';
export class MainRoutes{
    router:express.Router;
    constructor(){
        this.router = express.Router();
        this.routes()
    }
     routes(){
         this.router.use('/client', ClientRoutesApi);
         this.router.use('/pizza',PizzaAPiRoutes);
         this.router.use('/order',OrderRoutesApi);
     }
}
export const ClientMainApi = new MainRoutes().router;