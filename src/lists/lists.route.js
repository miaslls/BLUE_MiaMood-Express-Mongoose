import express from 'express';
const router = express.Router();

import {
  createListController,
  getAllListsController,
  getListByIdController,
  updateListController,
  deleteListController,
} from './lists.controller.js';

router.post('/', createListController);
router.get('/', getAllListsController);
router.get('/:id', getListByIdController);
router.patch('/:id', updateListController);
router.delete('/:id', deleteListController);

export default router;
