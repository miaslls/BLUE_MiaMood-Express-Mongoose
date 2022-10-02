import express from 'express';
const router = express.Router();

import * as listController from './list.controller.js';

router.post('/', listController.create);
router.get('/', listController.getAll);
router.get('/:id', listController.getById);
router.patch('/:id', listController.update);
router.delete('/:id', listController.remove);

export default router;
