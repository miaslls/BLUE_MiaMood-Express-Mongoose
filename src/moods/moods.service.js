'use strict';

import Mood from './Mood.js';

export const getAllMoodsService = () => Mood.find().sort({ dateTime: -1 }).populate('user');

export const getMoodsbyDateService = (date) => Mood.find({ dateTime: { $regex: `${date}` } });

export const getMoodByIdService = (id) => Mood.findById(id).populate('user');

export const searchMoodsService = (query) => {
  return Mood.find({ text: { $regex: `${query || ''}`, $options: 'i' } }).populate('user');
};

export const createMoodService = (type, icon, text, dateTime, userId) => {
  return Mood.create({ type, icon, text, dateTime, user: userId });
};

export const updateMoodService = (id, body) => {
  return Mood.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

export const deleteMoodService = (id) => Mood.findByIdAndDelete(id);
