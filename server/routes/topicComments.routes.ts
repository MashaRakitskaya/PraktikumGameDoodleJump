import {
  createTopicComment,
  dislikeTopicComment,
  likeTopicComment
} from '../controllers/topicComment.controller';
import express from 'express';

const router = express.Router();

router.post('/', createTopicComment);
router.put('/:id/likes', likeTopicComment);
router.put('/:id/dislikes', dislikeTopicComment);

export default router;
