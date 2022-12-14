//validator는 여기서 설정
import express from 'express';
import * as sendController from '../controller/send.js';

const router = express.Router();
const app = express();
app.use(express.json());

router.get('/sendphone', sendController.sendPhone);

router.post('/sendstart', sendController.sendStart);

router.post('/sendend', sendController.sendEnd);

export default router;
