import { PizzaSchema } from "../model/PizzaItem.model";
import { IPIZZAITEM } from "../types/document/IPizzaItems";
export default class MainPizza{
 constructor(){}
  savePizza(Pizza:IPIZZAITEM){
      return new PizzaSchema(Pizza).save();
  }
  updatePizza(Pizza:IPIZZAITEM){
    return  PizzaSchema.findByIdAndUpdate(Pizza._id,Pizza,{
     new: true
    });
 }
 getALLPizza(){
    return PizzaSchema.find();
}
deletPizza(_id:string){
    return PizzaSchema.findByIdAndDelete(_id);

}

}