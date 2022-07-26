import express from 'express';
import * as authController from '../controller/auth.js';

const router = express.Router();
const app = express();
app.use(express.json());

router.get('/getuserinfo', authController.getUserInfo);

export default router;
