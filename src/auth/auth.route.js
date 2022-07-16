'use strict';

import express from 'express';
const router = express.Router();

import loginController from './auth.controller.js';

router.post('/', loginController);

export default router;
