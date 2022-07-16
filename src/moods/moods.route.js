'use strict';

import express from 'express';
const router = express.Router();

import {
  getAllMoodsController,
  getMoodByIdController,
  createMoodController,
  updateMoodController,
} from './moods.controller.js';
import { validMoodId, validMoodBody } from './moods.middleware.js';
import authMiddleware from '../auth/auth.middleware.js';

router.get('/', authMiddleware, getAllMoodsController);
router.post('/', authMiddleware, validMoodBody, createMoodController);
router.get('/:id', authMiddleware, validMoodId, getMoodByIdController);
router.put('/:id', authMiddleware, validMoodId, validMoodBody, updateMoodController);

export default router;
