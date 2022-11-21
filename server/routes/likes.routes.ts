import { deleteLikeTopic } from '../controllers/topic.controller';
import express from 'express';
import { deleteLikeTopicComment } from '../controllers/topicComment.controller';

const router = express.Router();

router.delete('/:id', deleteLikeTopic);
router.delete('/:id', deleteLikeTopicComment);

export default router;
