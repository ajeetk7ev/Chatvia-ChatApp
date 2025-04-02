import mongoose, { model, Schema } from 'mongoose';

export interface IUser extends Document{
    _id?:mongoose.Schema.Types.ObjectId;
    username:string;
    password:string;
    online:boolean;
    avatar:string;
    createdAt:Date;
    updatedAt:Date;
    


}


const userSchema = new Schema<IUser>({
      username:{
        type:String,
        required:true
      },

      password:{
        type:String,
        required:true
      },

      avatar:{
        type:String,
        default:""
      },

      online:{
        type:Boolean,
        default:false
      },

},{timestamps:true});

export const User = model<IUser>("User",userSchema);