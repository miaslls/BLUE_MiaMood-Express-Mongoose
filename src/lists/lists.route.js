import express from 'express';
const router = express.Router();

import {
  createListController,
  getAllListsController,
  updateListController,
} from './lists.controller.js';

router.post('/', createListController);
router.get('/', getAllListsController);
router.patch('/:id', updateListController);

export default router;
