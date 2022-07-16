'use strict';

import Mood from './Mood.js';

export const createMoodService = (type, icon, text, dateTime, userId) => {
  return Mood.create({ type, icon, text, dateTime, user: userId });
};

export const getAllMoodsService = () => {
  return Mood.find().sort({ dateTime: -1 }).populate('user');
};

export const getMoodsbyDateService = (date) => {
  return Mood.find({ dateTime: { $regex: `${date}` } });
};

export const searchMoodsService = (query) => {
  return Mood.find({ text: { $regex: `${query || ''}`, $options: 'i' } }).populate('user');
};

export const getMoodByIdService = (id) => {
  return Mood.findById(id).populate('user');
};

export const updateMoodService = (id, body) => {
  return Mood.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

export const deleteMoodService = (id) => {
  return Mood.findByIdAndDelete(id);
};
