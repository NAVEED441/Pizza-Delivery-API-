import { Schema, model } from 'mongoose';
import { ICLIENT } from '../types/document/IClient';
const ICLIENTSchema = new Schema(
  {
    Name : { type: String },
    UserName:{type:String, required:true},
    cell: { type: String },
    adress: { type: String },
    Password:{type:String, required:true}
  },
  { timestamps: true }
);
export const CLIENTSchema = model<ICLIENT>(' ICLIENTSchema', ICLIENTSchema);