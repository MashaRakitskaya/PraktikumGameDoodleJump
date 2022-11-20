import { deleteDislikeTopic } from '../controllers/topic.controller';
import express from 'express';

const router = express.Router();

router.delete('/:id', deleteDislikeTopic);

export default router;
