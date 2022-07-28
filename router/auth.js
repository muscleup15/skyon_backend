import express from 'express';
import * as authController from '../controller/auth.js';
import { body } from 'express-validator';

const router = express.Router();
const app = express();
app.use(express.json());

router.post('/compareverifycode', authController.compareVerifyCode);

router.post('/signup', authController.signUp);

router.post('/signin', authController.signIn);

router.put('/test', authController.testChangePw);

export default router;
