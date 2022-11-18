import { createTopicComment } from '../controllers/commentToComment.controller';
import express from 'express';

const router = express.Router();

router.post('/', createTopicComment);

export default router;
