import { createTopicComment } from '../controllers/topicComment.controller';
import express from 'express';

const router = express.Router();

router.post('/', createTopicComment);

export default router;
