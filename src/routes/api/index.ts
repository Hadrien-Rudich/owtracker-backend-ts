import { Router } from 'express';
import userRouter from './users/users';
import authRouter from './users/auth';
import heroRouter from './heroes/heroes';
import heroRoleRouter from './heroes/heroRoles';
import mapRouter from './maps/maps';
import mapTypeRouter from './maps/mapTypes';
import gamesHistoryRouter from './users/gamesHistory';
import profileRouter from './users/profiles';
export const apiRouter = Router();

apiRouter.use('/', authRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/maps', mapRouter);
apiRouter.use('/heroes', heroRouter);
apiRouter.use('/gameshistory', gamesHistoryRouter);
apiRouter.use('/maptypes', mapTypeRouter);
apiRouter.use('/profiles', profileRouter);
apiRouter.use('/heroroles', heroRoleRouter);
