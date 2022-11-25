import express from 'express';
import { isAuthorizedMidlware } from '../isAuthorizedMidlware';
import { renderMiddleware } from '../renderMidlware';

const router = express.Router();

router.get('/profile', isAuthorizedMidlware, renderMiddleware);
router.get('/profile-setting', isAuthorizedMidlware, renderMiddleware);
router.get('/password-setting', isAuthorizedMidlware, renderMiddleware);
router.get('/forum', isAuthorizedMidlware, renderMiddleware);
router.get('/leaderboard', isAuthorizedMidlware, renderMiddleware);
router.get('/presentation', isAuthorizedMidlware, renderMiddleware);
router.get('/game', isAuthorizedMidlware, renderMiddleware);

export default router;
