
import { CLIENTSchema } from "../model/Client.model";
import { ICLIENT } from "../types/document/IClient";
import { LogInReq } from "../types/request/Clients.request";

export default class MainClient{
    constructor(){}
    saveClient(client:ICLIENT){
            return new CLIENTSchema(client).save();
    }
    updateClient(client:ICLIENT){
       return  CLIENTSchema.findByIdAndUpdate(client._id,client,{
        new: true
       });
    }
    getALLClient(){
        return CLIENTSchema.find();
    }
    loginClient(loginClient:LogInReq){
       
    return  CLIENTSchema.findOne({UserName: loginClient.UserName, Password: loginClient.Password})
    
    }
}