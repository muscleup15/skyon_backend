import * as userRepository from '../data/data.js';
import { verifyCode } from './send.js';

//TODO : hash password

export async function compareVerifyCode(req, res, next) {
  const { inputVerifyCode } = req.body;
  if (inputVerifyCode == verifyCode) {
    return res.json({
      success: true,
    });
  } else {
    return res.json({
      success: false,
      error: 'invalid verifyCode',
    });
  }
}

export async function signUp(req, res, next) {
  const { type, phoneNumber, password } = req.body;
  const userId = await userRepository.createUser({
    type,
    phoneNumber,
    password,
  });
  res.status(201).json({ userId });
}

export async function testChangePw(req, res, next) {
  const { uid, password } = req.body;
  const updated = await userRepository.updateUser(uid, password);
  res.status(201).json(updated);
}
