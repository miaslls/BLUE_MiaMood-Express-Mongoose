'use strict';

import Mood from './Mood.js';

// export const createMoodService = (userId, type, icon, text, dateTime) => {
//   return Mood.create({ type, icon, text, dateTime, user: userId });
// };

export const createMoodService = (type, text, date, time) => {
  return Mood.create({ type, text, date, time });
};

// export const getAllMoodsService = (userId) => {
//   return Mood.find({ user: userId }).sort({ dateTime: -1 }).populate('user');
// };

export const getAllMoodsService = () => {
  return Mood.find().sort([
    ['date', -1],
    ['time', -1],
  ]);
};

// export const getMoodsbyDateService = (userId, date) => {
//   return Mood.find({ user: userId, dateTime: { $regex: `${date}` } })
//     .sort({ dateTime: -1 })
//     .populate('user');
// };

export const getMoodsbyDateService = (date) => {
  return Mood.find({ dateTime: { $regex: `${date}` } }); // .sort({ dateTime: -1 });
};

// export const searchMoodsService = (userId, query) => {
//   return Mood.find({ user: userId, text: { $regex: `${query || ''}`, $options: 'i' } })
//     .sort({ dateTime: -1 })
//     .populate('user');
// };

export const searchMoodsService = (query) => {
  return Mood.find({ text: { $regex: `${query || ''}`, $options: 'i' } }); // .sort({ dateTime: -1 });
};

// export const getMoodByIdService = (id) => {
//   return Mood.findById(id).populate('user');
// };

export const getMoodByIdService = (id) => {
  return Mood.findById(id);
};

export const updateMoodService = (id, body) => {
  return Mood.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

export const deleteMoodService = (id) => {
  return Mood.findByIdAndDelete(id);
};
