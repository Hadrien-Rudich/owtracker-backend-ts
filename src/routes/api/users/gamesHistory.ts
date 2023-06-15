import { Router } from 'express';
import { gamesHistoryController } from '../../../controllers/users/gamesHistoryController';
const gamesHistoryRouter = Router();

gamesHistoryRouter
  .route('/')
  .get(gamesHistoryController.getGamesHistory)
  .post(gamesHistoryController.createGameHistory);

gamesHistoryRouter
  .route('/:id')
  .get(gamesHistoryController.getGameHistory)
  .patch(gamesHistoryController.updateGameHistory)
  .delete(gamesHistoryController.deleteGameHistory);

export default gamesHistoryRouter;
