import { NCPClient } from 'node-sens';
import { config } from '../config.js';
const ncp = new NCPClient(config.ncpcInfo);

export const verifyCode = Math.floor(Math.random() * 900000 + 100000);

export async function sendMessage(phone, msg) {
  const ret = await ncp.sendSMS({
    to: phone,
    content: msg,
  });
  return ret;
}

export async function sendPhone(req, res, next) {
  const { phone } = req.body;
  const msg = `스카이오프 회원가입 인증번호는 ${verifyCode}입니다`;
  sendMessage(phone, msg);
  return res.json({ message: '전송완료' });
}
