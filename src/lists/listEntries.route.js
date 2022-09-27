import express from 'express';
const router = express.Router();

import {
  createListEntryController,
  getAllListEntriesController,
} from './listEntries.controller.js';

router.post('/', createListEntryController);
router.get('/', getAllListEntriesController);

export default router;
