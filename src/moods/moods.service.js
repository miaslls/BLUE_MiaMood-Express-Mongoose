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

export const getMoodByIdService = (id) => {
  return Mood.findById(id).populate('user');
};

export const updateMoodService = (id, body) => {
  return Mood.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

export const deleteMoodService = (id) => {
  return Mood.findOneAndDelete(id);
};
