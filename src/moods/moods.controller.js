'use strict';

import {
  getAllMoodsService,
  getMoodsbyDateService,
  getMoodByIdService,
  searchMoodsService,
  createMoodService,
  updateMoodService,
  deleteMoodService,
} from './moods.service.js';

// 📌 GET ALL

export const getAllMoodsController = async (req, res) => {
  try {
    const moods = await getAllMoodsService();

    if (!moods) {
      return res.status(404).send({ message: 'not found' });
    }

    res.send({ moods });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET BY DATE

export const getMoodsByDateController = async (req, res) => {
  try {
    const { year, month, day } = req.query;

    if (!year || !month || !day) {
      return res.status(400).send({ message: 'bad request' });
    }

    const date = `${year}-${month}-${day}`;

    const moods = await getMoodsbyDateService(date);

    if (!moods) {
      return res.status(404).send({ message: 'not found' });
    }

    res.send({ moods });
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

// 📌 SEARCH

export const searchMoodsController = async (req, res) => {
  try {
    const query = req.query.text;

    console.log(query); // 🐞

    const moods = await searchMoodsService(query);

    console.log(moods); // 🐞

    if (!moods) {
      return res.status(404).send({ message: 'not found' });
    }

    res.send({ moods });
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
    const body = req.body;

    const moodById = await getMoodByIdService(idParam);

    if (!moodById) {
      return res.status(404).send({ message: 'not found' });
    }

    const mood = await updateMoodService(idParam, body);

    res.send({ message: 'updated', mood: mood });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 DELETE

export const deleteMoodController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const moodById = await getMoodByIdService(idParam);

    if (!moodById) {
      return res.status(404).send({ message: 'not found' });
    }

    await deleteMoodService(idParam);

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
