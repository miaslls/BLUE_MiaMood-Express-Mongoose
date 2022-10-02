import express from 'express';
const router = express.Router();

import * as listEntryController from './listEntry.controller.js';

router.post('/', listEntryController.create);
router.get('/', listEntryController.getAll);
router.get('/:id', listEntryController.getById);
router.patch('/:id', listEntryController.update);
router.delete('/:id', listEntryController.remove);

export default router;
