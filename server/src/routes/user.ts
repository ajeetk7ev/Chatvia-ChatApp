import expres from 'express';
import { getAllUser } from '../controllers/User';
const router = expres.Router();


router.get('/',getAllUser);

export default router;