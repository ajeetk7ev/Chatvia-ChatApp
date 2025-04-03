import { User } from "../models/User";
import { Request, Response } from "express";

export const getAllUser = async(req:Request,res:Response)=>{
         try {
            const users = await User.find().select("-password");
            //console.log("user is ",users);

            res.status(200).json({
                success:true,
                users
            })
            
         } catch (error) {
            console.log("Error in Fething user: ",error);
            res.status(500).json({
                success:false,
                message:"Internal server error"
            })
         }
}