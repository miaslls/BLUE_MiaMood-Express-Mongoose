'use strict';

import {
  createMoodService,
  getAllMoodsService,
  getMoodsbyDateService,
  searchMoodsService,
  getMoodByIdService,
  updateMoodService,
  deleteMoodService,
} from './moods.service.js';

// 📌 CREATE

export const createMoodController = async (req, res) => {
  try {
    const userId = req.userId;
    const { type, icon, text, dateTime } = req.body;

    const mood = await createMoodService(userId, Number(type), icon, text, dateTime);

    res.status(201).send({ message: 'created', mood: mood });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET ALL

export const getAllMoodsController = async (req, res) => {
  try {
    const userId = req.userId;

    const moods = await getAllMoodsService(userId);

    res.send({ moods });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET BY DATE

export const getMoodsByDateController = async (req, res) => {
  try {
    const userId = req.userId;
    const { year, month, day } = req.query;

    if (!year || !month || !day || year.length !== 4 || month.length !== 2 || day.length !== 2) {
      return res.status(400).send({ message: 'bad request' });
    }

    const date = `${year}-${month}-${day}`;

    const moods = await getMoodsbyDateService(userId, date);

    res.send({ moods });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET TODAY

export const getTodayMoodsController = async (req, res) => {
  try {
    const userId = req.userId;

    const today = new Date();

    const year = today.getFullYear().toString().padStart(4, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const moods = await getMoodsbyDateService(userId, `${year}-${month}-${day}`);

    res.send({ moods });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 SEARCH

export const searchMoodsController = async (req, res) => {
  try {
    const userId = req.userId;
    const query = req.query.text;

    const moods = await searchMoodsService(userId, query);

    res.send({ moods });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET BY ID

export const getMoodByIdController = async (req, res) => {
  try {
    const userId = req.userId;
    const idParam = req.params.id;

    const mood = await getMoodByIdService(userId, idParam);

    if (!mood) {
      return res.status(404).send({ message: 'not found' });
    }

    res.send({ mood });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 UPDATE

export const updateMoodController = async (req, res) => {
  try {
    const userId = req.userId;
    const idParam = req.params.id;
    const body = req.body;

    const moodById = await getMoodByIdService(userId, idParam);

    if (!moodById) {
      return res.status(404).send({ message: 'not found' });
    }

    const mood = await updateMoodService(userId, idParam, body);

    res.send({ message: 'updated', mood: mood });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 DELETE

export const deleteMoodController = async (req, res) => {
  try {
    const userId = req.userId;
    const idParam = req.params.id;

    const moodById = await getMoodByIdService(userId, idParam);

    if (!moodById) {
      return res.status(404).send({ message: 'not found' });
    }

    await deleteMoodService(userId, idParam);

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
