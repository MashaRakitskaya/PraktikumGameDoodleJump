import userTheme from './userTheme.routes';
import topic from './topics.routes';
import topicComments from './topicComments.routes';
import commentToComments from './commentToComments.routes';
import likes from './likes.routes';
import dislikes from './dislikes.routes';
import allowAfterRegistering from './allowAfterRegistering.routes';
import express from 'express';

const router = express.Router();

router.use('', allowAfterRegistering);

router.use('/user-theme', userTheme);
router.use('/topics', topic);
router.use('/topic-comments', topicComments);
router.use('/comment-to-comments', commentToComments);
router.use('/likes', likes);
router.use('/dislikes', dislikes);

export default router;
