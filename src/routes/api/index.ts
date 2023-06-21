import { Request, Response, NextFunction } from 'express';

import { Router } from 'express';
import userRouter from './users/users';
import authRouter from './users/auth';
import heroRouter from './heroes/heroes';
import heroRoleRouter from './heroes/heroRoles';
import mapRouter from './maps/maps';
import mapTypeRouter from './maps/mapTypes';
import gamesRouter from './users/games';
import profileRouter from './users/profiles';
import {
  authenticateToken,
  AuthenticatedRequest,
} from '../../middlewares/authenticateToken';
export const apiRouter = Router();

apiRouter.use('/', authRouter);

apiRouter.use((req: Request, res: Response, next: NextFunction) =>
  authenticateToken(req as AuthenticatedRequest, res, next)
);

apiRouter.use('/user', userRouter);
apiRouter.use('/maps', mapRouter);
apiRouter.use('/heroes', heroRouter);
apiRouter.use('/games', gamesRouter);
apiRouter.use('/maptypes', mapTypeRouter);
apiRouter.use('/profiles', profileRouter);
apiRouter.use('/heroroles', heroRoleRouter);
