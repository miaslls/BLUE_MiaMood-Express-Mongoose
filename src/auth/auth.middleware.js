'use strict';

import jwt from 'jsonwebtoken';
import { getUserByIdService } from '../users/users.service.js';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: 'token not provided' });
  }

  // ❗❗❗ 🔻 untested
  const [_, token] = /^Bearer (\S+)$/.exec(authHeader);
  if (!token) {
    return res.status(401).send({ message: 'invalid header' });
  }
  // const headerParts = authHeader.split(' ');

  //   if (headerParts.length !== 2) {
  //     return res.status(401).send({ message: 'invalid token' });
  //   }
  //
  //   const [scheme, token] = headerParts;
  //
  //   if (scheme !== 'Bearer') {
  //     return res.status(401).send({ message: 'badly formatted token' });
  //   }

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
