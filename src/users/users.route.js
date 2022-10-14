'use strict';

import express from 'express';
const router = express.Router();

import {
  createUserController,
  getAllUsersController,
  deleteUserController,
} from './users.controller.js';
// import authMiddleware from '../auth/auth.middleware.js';

router.post('/', createUserController);
router.get('/', getAllUsersController);
router.delete('/:id', deleteUserController);

export default router;
