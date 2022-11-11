import userTheme from './userTheme.routes';
import express from 'express';

const router = express.Router();

router.use('/user-theme', userTheme);

export default router;
