'use strict';

import User from '../users/User.js';
import jwt from 'jsonwebtoken';

export const loginService = (username) => User.findOne({ username: username }).select('+password');

export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 });
};
