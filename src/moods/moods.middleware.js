'use strict';

import mongoose from 'mongoose';

export const validMoodId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'invalid ID' });
  }

  next();
};

export const validMoodBody = (req, res, next) => {
  const { type, icon, dateTime, createdAt } = req.body;

  if (!type || !icon || !dateTime || !createdAt) {
    return res.status(400).send({ message: 'incomplete data' });
  }

  next();
};
