import express from 'express';
import * as authController from '../controller/auth.js';

const router = express.Router();
const app = express();
app.use(express.json());

router.post('/compareverifycode', authController.compareVerifyCode);

router.post('/signup', authController.signUp);

router.put('/test', authController.testChangePw);

export default router;
