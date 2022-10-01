import express from 'express';
const router = express.Router();

import {
  createListCategoryController,
  getAllListCategoriesController,
} from './listCategories.controller.js';

router.post('/', createListCategoryController);
router.get('/', getAllListCategoriesController);

export default router;
