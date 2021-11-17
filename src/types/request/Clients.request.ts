export interface SaveReqCLIENT{
   
  Name: string;
  UserName:string;
  cell: string;
 adress: string;
 Password:string;
  }
  export interface UpdateReqCLIENT {
    _id:string;
    Name: string;
    UserName:string;
    cell: string;
   adress: string;
   Password:string;
  }
  export interface LogInReq{
    UserName:string;
    Password:string;
  }