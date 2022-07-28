import * as userRepository from '../data/auth.js';
import bcrypt from 'bcrypt';
import { verifyCode } from './send.js';
import { config } from '../config.js';

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
  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
  const userId = await userRepository.createUser({
    type,
    phoneNumber,
    password: hashed,
  });
  res.status(201).json({ userId });
}

export async function signIn(req, res, next) {}

export async function testChangePw(req, res, next) {
  const { uid, password } = req.body;
  const updated = await userRepository.updateUser(uid, password);
  res.status(201).json(updated);
}
