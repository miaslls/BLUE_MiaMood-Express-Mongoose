'use strict';

import express from 'express';
const router = express.Router();

import {
  getAllMoodsController,
  getMoodByIdController,
  getMoodsByDateController,
  searchMoodsController,
  createMoodController,
  updateMoodController,
  deleteMoodController,
} from './moods.controller.js';
import { validMoodId, validMoodBody } from './moods.middleware.js';
import authMiddleware from '../auth/auth.middleware.js';

router.get('/', authMiddleware, getAllMoodsController);
router.post('/', authMiddleware, validMoodBody, createMoodController);
router.get('/date', authMiddleware, getMoodsByDateController);
router.get('/id/:id', authMiddleware, validMoodId, getMoodByIdController);
router.put('/update/:id', authMiddleware, validMoodId, validMoodBody, updateMoodController);
router.delete('/delete/:id', authMiddleware, validMoodId, deleteMoodController);
router.get('/search', authMiddleware, searchMoodsController);

export default router;
