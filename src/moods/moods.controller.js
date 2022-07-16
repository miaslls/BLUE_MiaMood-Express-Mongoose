'use strict';

import {
  getAllMoodsService,
  getMoodByIdService,
  createMoodService,
  updateMoodService,
  deleteMoodService,
} from './moods.service.js';

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

    res.send({ mood });
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

    res.status(201).send({ message: 'created', mood: mood });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 UPDATE

export const updateMoodController = async (req, res) => {
  try {
    const idParam = req.params.id;
    const moodBody = req.body;

    const chosenMood = await getMoodByIdService(idParam);

    if (!chosenMood) {
      return res.status(404).send({ message: 'not found' });
    }

    const mood = await updateMoodService(idParam, moodBody);

    res.send({ message: 'updated', mood: mood });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 DELETE

export const deleteMoodController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const chosenMood = await getMoodByIdService(idParam);

    if (!chosenMood) {
      return res.status(404).send({ message: 'not found' });
    }

    await deleteMoodService(idParam);

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
