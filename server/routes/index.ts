import userTheme from './userTheme.routes';
import topic from './topics.routes';
import topicComments from './topicComments.routes';
import commentToComments from './commentToComments.routes';
import express from 'express';

const router = express.Router();

router.use('/user-theme', userTheme);
router.use('/topics', topic);
router.use('/topic-comments', topicComments);
router.use('/comment-to-comments', commentToComments);

export default router;
