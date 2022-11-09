import userRouter from './users.routes.js';

import userTheme from './userTheme.routes.js';

import express from 'express';

const router = express.Router();

router.use('/users', userRouter);
router.use('/user-theme', userTheme);

export default router;
