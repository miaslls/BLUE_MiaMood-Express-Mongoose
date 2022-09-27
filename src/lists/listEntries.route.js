import express from 'express';
const router = express.Router();

import { createListEntryController } from './listEntries.controller.js';

router.post('/', createListEntryController);

export default router;
