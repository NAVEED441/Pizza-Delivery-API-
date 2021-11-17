import express from 'express';
import Jwt from 'jsonwebtoken';
import ClientController from '../controller/Client.controller';

import { UpdateReqCLIENT, SaveReqCLIENT, LogInReq } from '../types/request/Clients.request';
import { SaveUpdateResClient } from '../types/responce/Client.responce';
import CustomerError from '../utills/error';

export class ClientRoute{
    router:express.Router;
    constructor(){
        this.router = express.Router();
        this.routes();
    }
          routes(){
              this.router.post('/saveclient', async(req,res,next)=>{
                       try{
                           const savereq:SaveReqCLIENT = req.body;
                           const new_Client:SaveUpdateResClient =await new ClientController().saveClient(savereq);
                           res.status(200).json({
                               message: new_Client
                           });

                       }catch(error){
                             next(error)
                       }
            });
            this.router.put('/updateclient',async(req,res,next)=>{
                try{
                    const updatereq:UpdateReqCLIENT = req.body;
                    const updateClient:SaveUpdateResClient = await new ClientController().updateAdmin(updatereq);
                    res.status(200).json({
                        message:updateClient
                    });

                }catch(error){
                    next(error);
                }
            });
            this.router.get('/getallclient', async(req,res,next)=>{
                  try{
                      const getAllClient:SaveUpdateResClient[] = await new ClientController().getAllClient();
                      res.status(200).json({
                          result:getAllClient
                      });

                  }catch(error){
                       next(error)
                  }
            });
            this.router.post('/loginUser', async(req,res,next)=>{
                try{
                    const authReq: LogInReq = req.body;
				const authUser = await new ClientController().loginUser(authReq);
				if (authUser) {
					if (authReq.UserName === authUser.UserName && authReq.Password===authUser.Password) {
						return res.json({
							token: Jwt.sign({ _id: authUser._id }, 'this is the key'),
						});
					}
				} else {
					return res.status(400).json({
						message: 'User NOt Found',
					});
				}

                }catch(err){

                }
            })
            
            
              

        } 
        
}
  export const ClientRoutesApi = new ClientRoute().router;