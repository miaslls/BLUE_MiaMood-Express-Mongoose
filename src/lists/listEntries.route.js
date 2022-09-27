import express from 'express';
const router = express.Router();

import {
  createListEntryController,
  getAllListEntriesController,
  updateListEntryController,
  deleteListEntryController,
} from './listEntries.controller.js';

router.post('/', createListEntryController);
router.get('/', getAllListEntriesController);
router.patch('/:id', updateListEntryController);
router.delete('/:id', deleteListEntryController);

export default router;
