import { deleteLikeTopic } from '../controllers/topic.controller';
import express from 'express';

const router = express.Router();

router.delete('/:id', deleteLikeTopic);

export default router;
