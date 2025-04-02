import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { dbConnect } from '../lib/db';
import authRoutes from '../routes/auth';
import cors from 'cors'

const app = express();

app.use(express.json());
const corsOptions = {
    origin: ["http://localhost:5173"], // Allow specific origins
    methods: ["GET", "POST", "PUT", "DELETE"],               // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"],       // Allowed headers
    credentials: true,                                       // Allow cookies
}
app.use(cors(corsOptions));

dbConnect();

const PORT = process.env.PORT || 8000


app.use('/api/v1/auth',authRoutes);

app.listen(PORT,()=>{
    console.log(`app is running at port ${PORT}`)
})