import express from 'express';
import { body, validationResult } from 'express-validator';

//이거도 미리 해보자

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array() });
};
