import {
  findOrCreateUserTheme,
  updateUserTheme
} from '../controllers/userTheme.controller.js';
import express from 'express';

const router = express.Router();

router.post('/:id', findOrCreateUserTheme);
// router.post('/', addToUserTheme);
router.put('/:id', updateUserTheme);

export default router;
