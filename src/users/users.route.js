'use strict';

import express from 'express';
const router = express.Router();

import { getAllUsersController } from './users.controller.js';

router.get('/', getAllUsersController);

export default router;
