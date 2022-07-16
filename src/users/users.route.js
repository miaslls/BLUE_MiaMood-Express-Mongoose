'use strict';

import express from 'express';
const router = express.Router();

import { getAllUsersController, createUserController } from './users.controller.js';

router.get('/', getAllUsersController);
router.post('/', createUserController);

export default router;
