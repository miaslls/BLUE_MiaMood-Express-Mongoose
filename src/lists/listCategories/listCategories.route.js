import express from 'express';
const router = express.Router();

import { createListCategoryController } from './listCategories.controller.js';

router.post('/', createListCategoryController);

export default router;
