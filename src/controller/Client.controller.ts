import { ICLIENT } from "../types/document/IClient";
import MainClient from "../repositries/Client.repositries";
import { LoginResponce, SaveUpdateResClient } from "../types/responce/Client.responce";
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import CustomeError from '../utills/error';
import { LogInReq, SaveReqCLIENT, UpdateReqCLIENT} from "../types/request/Clients.request";
@Route('client')
@Tags('client')
export default class ClientController{
    constructor(){}
    @Post('/saveclient')
    async saveClient(@Body() client:SaveReqCLIENT): Promise<SaveUpdateResClient>{
         const new_Client:ICLIENT = await new MainClient().saveClient(<ICLIENT>(client));
         return <SaveUpdateResClient>new_Client;
    }
    @Put('/updateclient')
  async updateAdmin(@Body() client: UpdateReqCLIENT): Promise<SaveUpdateResClient> {
    const update_Client:ICLIENT = await new MainClient().updateClient(<ICLIENT>(client));
    if (update_Client === null)
      throw new CustomeError(400, 'Admin not updated');
    return <SaveUpdateResClient>update_Client;
  }
  @Get('/getallclient')
  async getAllClient():Promise<SaveUpdateResClient[]>{
     const client:ICLIENT[] =  await new  MainClient().getALLClient()
     return <SaveUpdateResClient[]>(client);
  }
  @Post('/loginUser')
  async loginUser(@Body() loginReq:LogInReq):Promise<SaveUpdateResClient>{
    const loginclent:ICLIENT =<any> await new MainClient().loginClient(loginReq);
    return <SaveUpdateResClient>loginclent;
  }

}