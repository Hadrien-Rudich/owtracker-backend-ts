import { Router } from 'express';
import { apiRouter } from './api';
import invalidUrl from '../middlewares/invalidUrl';

const router = Router();

router.use('/', apiRouter);
router.use(invalidUrl);

export default router;
