import { Request, Response, NextFunction } from 'express';
import type { Game } from '../../models/map/game';
import { gameMapper } from '../../data/dataMappers/users/gameMapper';

export const gameController = {
  async getGames(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const games = await gameMapper.readGames();
      res.status(200).json(games);
    } catch (error) {
      next(error);
    }
  },

  async getGame(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const gameId = Number(req.params.id);
      const game = await gameMapper.readGame(gameId);

      res
        .status(200)
        .json([{ message: `Game with id: ${gameId} found` }, { game: game }]);
    } catch (error) {
      next(error);
    }
  },

  async createGame(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const gameObj: Game.New = req.body;
      const newGame = await gameMapper.createGame(gameObj);
      res
        .status(201)
        .json([
          { message: `Game created with id: ${newGame.id}` },
          { game: newGame },
        ]);
    } catch (error) {
      next(error);
    }
  },

  async updateGame(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const gameId = Number(req.params.id);
      const gameObj: Game.Update = req.body;
      const updatedGame = await gameMapper.updateGame(gameId, gameObj);
      res
        .status(200)
        .json([
          { message: `Game with id: ${updatedGame.id} updated` },
          { updatedGame: updatedGame },
        ]);
    } catch (error) {
      next(error);
    }
  },

  async deleteGame(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const gameId = Number(req.params.id);
      await gameMapper.deleteGame(gameId);
      res.status(200).json({ message: `Game with id: ${gameId} deleted` });
    } catch (error) {
      next(error);
    }
  },
};
