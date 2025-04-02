import express from 'express';
import { signin, signup } from '../controllers/Auth';
const router = express.Router();



router.post('/signup',signup);
router.post('/signin',signin);
router.get('/fetch',async(req,res)=>{
    res.send("This is fetch route");
})


export default router;