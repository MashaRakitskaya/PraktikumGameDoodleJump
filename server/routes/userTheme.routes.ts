import {
  findOrCreateUserTheme,
  updateUserTheme,
  getUserTheme
} from '../controllers/userTheme.controller';
import express from 'express';

const router = express.Router();

router.post('/:id', findOrCreateUserTheme);
router.put('/:id', updateUserTheme);
router.get('/:id', getUserTheme);

export default router;
