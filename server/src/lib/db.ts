import mongoose from "mongoose";


export const dbConnect = async ()=>{
     const MONGODB_URI = process.env.MONGODB_URI!;
     try {
        await mongoose.connect(MONGODB_URI);
        console.log("DB connected Successfully");
     } catch (error) {
        console.log(error);
        console.log("Issue in DB connection");
        process.exit(1);
     }
}

