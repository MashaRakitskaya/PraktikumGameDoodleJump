import {
  createTopic,
  getTopic,
  getTopics
} from '../controllers/topic.controller';
import express from 'express';

const router = express.Router();

router.post('/', createTopic);
router.get('/:id', getTopic);
router.get('/', getTopics);

export default router;
