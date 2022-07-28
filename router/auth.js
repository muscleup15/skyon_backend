import express from 'express';
import * as authController from '../controller/auth.js';
import { body } from 'express-validator';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();
const app = express();
app.use(express.json());

router.post('/compareverifycode', authController.compareVerifyCode);

router.post('/signup', authController.signUp);

router.post('/login', authController.logIn);

router.put('/test', authController.testChangePw);

router.get('/verify', isAuth, authController.me);

export default router;
