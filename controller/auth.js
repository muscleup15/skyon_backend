import * as userRepository from '../data/auth.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { verifyCode } from './send.js';
import { config } from '../config.js';
import { user } from '../data/model.js';

//redis를 사용해서 다시 바꿔야겠다.

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

//여기서 에러 잡는다
export async function signUp(req, res, next) {
  const { type, phoneNumber, password } = req.body;
  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
  const userId = await userRepository.createUser({
    type,
    phoneNumber,
    password: hashed,
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, type });
}

export async function logIn(req, res, next) {
  const { phoneNumber, password } = req.body;
  const user = await userRepository.findByPhoneNumber(phoneNumber);
  if (!user) {
    res.status(401).json({ message: '잘못된 전화번호 혹은 비밀번호 입니다.' });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    res.status(401).json({ message: '잘못된 전화번호 혹은 비밀번호 입니다.' });
  }
  const token = createJwtToken(user.uid);
  res.status(200).json({ token });
}

export async function testChangePw(req, res, next) {
  const { uid, password } = req.body;
  const updated = await userRepository.updateUser(uid, password);
  res.status(201).json(updated);
}

export async function me(req, res, next) {
  const user = await userRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json({ token: req.token });
}

function createJwtToken(id) {
  const token = jwt.sign({ id }, config.jwt.jwtSecretKey, {
    expiresIn: config.jwt.expiresInSec,
  });
  return token;
}
