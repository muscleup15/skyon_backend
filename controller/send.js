import { config } from '../config.js';
import * as send from '../data/send.js';

export const verifyCode = Math.floor(Math.random() * 900000 + 100000);

//회원가입한 유저가 또 발송을 한다.

export async function sendPhone(req, res, next) {
  const { phone } = req.body;
  const msg = `스카이오프 회원가입 인증번호는 ${verifyCode}입니다`;
  await send.sendMessage(phone, msg);
  return res.json({ message: '전송완료' });
}

export async function sendStart(req, res, next) {
  const text = req.body.text;
  await send.publishMessage(config.slackInfo.channelId, text);
  return res.status(200).json({ text });
}

export async function sendEnd(req, res, next) {
  const text = req.body.text;
  await send.publishMessage(config.slackInfo.channelId, text);
  return res.status(200).json({ text });
}
