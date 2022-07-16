'use strict';

import { getAllMoodsService } from './moods.service.js';

export const getAllMoodsController = async (req, res) => {
  try {
    const allMoods = await getAllMoodsService();

    if (!allMoods) {
      return res.status(404).send({ message: 'not found' });
    }

    res.send({
      allMoods: allMoods.map((mood) => ({
        user: mood.user,
        id: mood._id,
        type: mood.type,
        icon: mood.icon,
        text: mood.text,
        dateTime: mood.dateTime,
        createdAt: mood.createdAt,
      })),
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
