export interface SaveReqPizza{
    PizzaName: string;
    Price:string;

}
export interface UpdateReqPizza{
    _id:string;
     PizzaName: string;
     Price:string;
}

export interface DeletePizza{
    id :string
}
