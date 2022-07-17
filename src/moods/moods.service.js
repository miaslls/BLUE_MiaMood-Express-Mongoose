'use strict';

import Mood from './Mood.js';

export const createMoodService = (userId, type, icon, text, dateTime) => {
  return Mood.create({ type, icon, text, dateTime, user: userId });
};

export const getAllMoodsService = (userId) => {
  return Mood.find({ user: userId }).sort({ dateTime: -1 }).populate('user');
};

export const getMoodsbyDateService = (userId, date) => {
  return Mood.find({ user: userId, dateTime: { $regex: `${date}` } })
    .sort({ dateTime: -1 })
    .populate('user');
};

export const searchMoodsService = (userId, query) => {
  return Mood.find({ user: userId, text: { $regex: `${query || ''}`, $options: 'i' } })
    .sort({ dateTime: -1 })
    .populate('user');
};

export const getMoodByIdService = (userId, id) => {
  return Mood.findOne({ user: userId, _id: id }).populate('user');
};

export const updateMoodService = (userId, id, body) => {
  return Mood.findOneAndUpdate({ user: userId, _id: id }, body).setOptions({
    returnOriginal: false,
  });
};

export const deleteMoodService = (userId, id) => {
  return Mood.findOneAndDelete({ user: userId, _id: id });
};
