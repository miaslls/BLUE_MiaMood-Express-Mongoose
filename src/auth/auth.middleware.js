'use strict';

import jwt from 'jsonwebtoken';
import { getUserByIdService } from '../users/users.service.js';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: 'token not provided' });
  }

  const headerParts = authHeader.split(' ');

  if (headerParts.length !== 2) {
    return res.status(401).send({ message: 'invalid token' });
  }

  const [scheme, token] = headerParts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ message: 'badly formatted token' });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'invalid token' });
    }

    const user = await getUserByIdService(decoded.id);

    if (!user) {
      return res.status(404).send({ message: 'user not found' });
    }

    req.userId = user.id;

    return next();
  });
};

export default authMiddleware;
