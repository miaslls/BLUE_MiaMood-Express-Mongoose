'use strict';

import express from 'express';
const router = express.Router();

import {
  createMoodController,
  getAllMoodsController,
  getMoodsByDateController,
  getTodayMoodsController,
  searchMoodsController,
  getMoodByIdController,
  updateMoodController,
  deleteMoodController,
} from './moods.controller.js';

import { validMoodId, validMoodBody } from './moods.middleware.js';
// import authMiddleware from '../auth/auth.middleware.js';

router.post('/', validMoodBody, createMoodController);
router.get('/', getAllMoodsController);
router.put('/update/:id', validMoodId, validMoodBody, updateMoodController);
router.delete('/delete/:id', validMoodId, deleteMoodController);
router.get('/date', getMoodsByDateController);
router.get('/date/today', getTodayMoodsController);
router.get('/search', searchMoodsController);
router.get('/id/:id', validMoodId, getMoodByIdController);

export default router;
