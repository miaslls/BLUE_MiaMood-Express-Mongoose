'use strict';

import { getAllMoodsService, createMoodService, getMoodByIdService } from './moods.service.js';

// 📌 GET ALL

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

// 📌 GET BY ID

export const getMoodByIdController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const mood = await getMoodByIdService(idParam);

    if (!mood) {
      return res.status(404).send({ message: 'not found' });
    }

    res.send(mood);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 CREATE

export const createMoodController = async (req, res) => {
  try {
    const { type, icon, text, dateTime } = req.body;
    const userId = req.userId;

    const mood = await createMoodService(Number(type), icon, text, dateTime, userId);

    res.status(201).send({
      message: 'created',
      mood: mood,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
