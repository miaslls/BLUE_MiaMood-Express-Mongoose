import express from 'express';
const router = express.Router();

import { createListController, getAllListsController } from './lists.controller.js';

router.post('/', createListController);
router.get('/', getAllListsController);

export default router;
