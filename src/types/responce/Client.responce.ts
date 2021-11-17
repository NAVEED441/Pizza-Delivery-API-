export interface SaveUpdateResClient{
    _id:string;
    Name: string;
    UserName:string;
    cell: string;
   adress: string;
   Password:string;
   createdAt?: string;
   updatedAt?: string;
}
export interface LoginResponce{
    token:string
}