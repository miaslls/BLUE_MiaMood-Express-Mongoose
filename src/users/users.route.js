'use strict';

import express from 'express';
const router = express.Router();

import { createUserController, getAllUsersController } from './users.controller.js';
import authMiddleware from '../auth/auth.middleware.js';

router.post('/', createUserController);
router.get('/', authMiddleware, getAllUsersController);

export default router;
