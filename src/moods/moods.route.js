'use strict';

import express from 'express';
const router = express.Router();

import { getAllMoodsController } from './moods.controller.js';
import authMiddleware from '../auth/auth.middleware.js';

router.get('/', authMiddleware, getAllMoodsController);

export default router;
