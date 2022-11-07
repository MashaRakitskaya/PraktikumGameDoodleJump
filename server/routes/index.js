import userRouter from './users.routes.js';

import express from 'express';

const router = express.Router();

router.use('/users', userRouter);

export default router;
