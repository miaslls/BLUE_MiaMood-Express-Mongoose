import express from 'express';
const router = express.Router();

import { createListController } from './lists.controller.js';

router.post('/', createListController);

export default router;
