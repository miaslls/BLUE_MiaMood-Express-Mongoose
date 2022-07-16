'use strict';

import Mood from './Mood.js';

export const getAllMoodsService = () => Mood.find().sort({ _id: -1 }).populate('user');
