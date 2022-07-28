import jwt from 'jsonwebtoken';
import { config } from '../config.js';
import { findById } from '../data/auth.js';

const AUTH_ERROR = 'Authentication Error';

export async function isAuth(req, res, next) {
  const authHeader = req.get('Authorization');
  if (!(authHeader && authHeader.startsWith('Bearer '))) {
    res.status(404).json(AUTH_ERROR);
  }
  const token = authHeader.split(' ')[1];
  jwt.verify(token, config.jwt.jwtSecretKey, async (err, decoded) => {
    if (err) {
      return res.status(401).json(AUTH_ERROR);
    }
    const user = await findById(decoded.id);
    if (!user) {
      return res.status(401).json(AUTH_ERROR);
    }
    console.log(user.dataValues.uid);
    req.userId = user.dataValues.uid;
    req.token = token;
    next();
  });
}
