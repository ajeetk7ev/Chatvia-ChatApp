import mongoose, { model, Schema } from "mongoose";

export interface IMessage extends Document{
    _id?:mongoose.Schema.Types.ObjectId;
    senderId:string;
    receiverId:string;
    content:string;
    status:boolean;
    createdAt?:Date;
    updatedAt?:Date;
}


const messageSchema = new Schema<IMessage>({
      senderId:{
        type:String,
        required:true
      },

      receiverId:{
        type:String,
        required:true
      },

      content:{
        type:String,
        required:true
      }
},{timestamps:true});


export const Message = model<IMessage>("Message",messageSchema);