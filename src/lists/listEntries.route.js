import express from 'express';
const router = express.Router();

import {
  createListEntryController,
  getAllListEntriesController,
  updateListEntryController,
} from './listEntries.controller.js';

router.post('/', createListEntryController);
router.get('/', getAllListEntriesController);
router.patch('/:id', updateListEntryController);

export default router;
