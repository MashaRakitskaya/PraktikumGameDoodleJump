import { deleteDislikeTopic } from '../controllers/topic.controller';
import express from 'express';
import { deleteDislikeTopicComment } from '../controllers/topicComment.controller';

const router = express.Router();

router.delete('/:id', deleteDislikeTopic);
router.delete('/:id', deleteDislikeTopicComment);

export default router;
