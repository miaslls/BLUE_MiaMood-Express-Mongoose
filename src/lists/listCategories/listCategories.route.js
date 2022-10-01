import express from 'express';
const router = express.Router();

import {
  createListCategoryController,
  deleteListCategoryController,
  getAllListCategoriesController,
  getListCategoryByIdController,
  updateListCategoryController,
} from './listCategories.controller.js';

router.post('/', createListCategoryController);
router.get('/', getAllListCategoriesController);
router.get('/:id', getListCategoryByIdController);
router.patch('/:id', updateListCategoryController);
router.delete('/:id', deleteListCategoryController);

export default router;
