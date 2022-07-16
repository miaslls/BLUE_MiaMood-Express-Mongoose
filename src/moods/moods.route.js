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
import authMiddleware from '../auth/auth.middleware.js';

router.post('/', authMiddleware, validMoodBody, createMoodController);
router.get('/', authMiddleware, getAllMoodsController);
router.get('/date', authMiddleware, getMoodsByDateController);
router.get('/date/today', authMiddleware, getTodayMoodsController);
router.get('/search', authMiddleware, searchMoodsController);
router.get('/id/:id', authMiddleware, validMoodId, getMoodByIdController);
router.put('/update/:id', authMiddleware, validMoodId, validMoodBody, updateMoodController);
router.delete('/delete/:id', authMiddleware, validMoodId, deleteMoodController);

export default router;
