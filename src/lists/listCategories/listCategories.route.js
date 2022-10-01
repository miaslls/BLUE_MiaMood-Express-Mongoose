import express from 'express';
const router = express.Router();

import {
  createListCategoryController,
  getAllListCategoriesController,
  getListCategoryByIdController,
} from './listCategories.controller.js';

router.post('/', createListCategoryController);
router.get('/', getAllListCategoriesController);
router.get('/:id', getListCategoryByIdController);

export default router;
