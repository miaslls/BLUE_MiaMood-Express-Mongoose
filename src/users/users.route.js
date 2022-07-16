'use strict';

import express from 'express';
const router = express.Router();

import { getAllUsersController, createUserController } from './users.controller.js';
import authMiddleware from '../auth/auth.middleware.js';

router.get('/', authMiddleware, getAllUsersController);
router.post('/', createUserController);

export default router;
