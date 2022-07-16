'use strict';

import Mood from './Mood.js';

export const getAllMoodsService = () => Mood.find().populate('user');
