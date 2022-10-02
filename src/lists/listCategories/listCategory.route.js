import express from 'express';
const router = express.Router();

import * as listCategoryController from './listCategory.controller.js';

router.post('/', listCategoryController.create);
router.get('/', listCategoryController.getAll);
router.get('/:id', listCategoryController.getById);
router.patch('/:id', listCategoryController.update);
router.delete('/:id', listCategoryController.remove);

export default router;
