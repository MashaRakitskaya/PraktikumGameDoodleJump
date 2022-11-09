import {
  addToUserTheme,
  updateUserTheme,
  getUserTheme
} from '../controllers/userTheme.controller.js';
import express from 'express';

const router = express.Router();

router.get('/:id', getUserTheme);
router.post('/', addToUserTheme);
router.put('/:id', updateUserTheme);

export default router;
