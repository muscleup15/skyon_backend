import express from 'express';

const route = express.Router();

route.post('/test', (req, res, next) => {
  return res.status(200).json({ message: 'hi' });
});

export default route;
