import {
  createTopic,
  getTopic,
  getTopics,
  likeTopic,
  dislikeTopic
} from '../controllers/topic.controller';
import express from 'express';

const router = express.Router();

router.post('/', createTopic);
router.get('/:id', getTopic);
router.get('/', getTopics);
router.put('/:id/likes', likeTopic);
router.put('/:id/dislikes', dislikeTopic);

export default router;
