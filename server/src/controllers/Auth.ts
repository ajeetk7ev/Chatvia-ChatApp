import { User } from "../models/User";
import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        console.log('SIGNUP DATA ',username,password);

        //validation
        if (!username || !password) {
            res.status(400).json({
                success: false,
                message: "username and password are required"
            });
            return;
        }

        //User existance
        const user = await User.findOne({ username });
        if (user) {
            res.status(400).json({
                success: false,
                message: "User already exists"
            });
            return;
        }
       
        //hash the password using bcrypt library
        const hashPassword = await bcrypt.hash(password, 10);

        await User.create({ username, password: hashPassword });

        res.status(200).json({
            success: true,
            message: "User registered Successfully"
        })

      return;

    } catch (error) {
        console.log("error in signup", error);
        res.status(500).json({
            message: "Internal server Error",
            success: false
        })
        return;
    }
}


export const signin = async(req:Request,res:Response)=>{
    try {
        const {username,password} = req.body;

        //validation
        if(!username || !password){
            res.status(400).json({
                success:false,
                message:"Invalid credentials"
            })
        }

        const user = await User.findOne({username});
        if(!user){
            res.status(404).json({
                success:false,
                message:"User does not found"
            })
        }

        //compare password
        const isPasswordMatch = await bcrypt.compare(password,user?.password!);
        if(!isPasswordMatch){
            res.status(400).json({
                success:false,
                message:"Invalid credentials"
            })
        }

        const payload = {
            _id:user?._id,
            username:user?.username
        }

        const token = jwt.sign(payload,process.env.JWT_SECRET!,{expiresIn:"3d"});
       
        const resUser = {
            _id:user?._id,
            username:user?.username,
            avatar:user?.avatar,
            online:user?.online,
            createdAt:user?.createdAt,
            updatedAt:user?.updatedAt,
            token:token,
        }

        res.status(200).json({
            success:true,
            message:`welcome back ${user?.username}`,
            user:resUser
        })
    } catch (error:any) {
        console.log("Error in signin ",error.message || error);
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}