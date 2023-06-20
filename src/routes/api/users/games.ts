import { Router } from 'express';
import { gameController } from '../../../controllers/users/gameController';
import { validateData } from '../../../services/dataValidation/validator';
import { GamesSchema } from '../../../services/dataValidation/schemas/game';
const gamesRouter = Router();

gamesRouter
  .route('/')
  .get(gameController.getGames)
  .post(validateData(GamesSchema.create), gameController.createGame);

gamesRouter
  .route('/:id')
  .get(gameController.getGame)
  .patch(validateData(GamesSchema.update), gameController.updateGame)
  .delete(gameController.deleteGame);

export default gamesRouter;
