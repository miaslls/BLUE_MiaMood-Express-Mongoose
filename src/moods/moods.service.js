'use strict';

import Mood from './Mood.js';

export const getAllMoodsService = () => Mood.find().sort({ dateTime: -1 }).populate('user');

export const createMoodService = (type, icon, text, dateTime, userId) => {
  return Mood.create({ type, icon, text, dateTime, user: userId });
};
