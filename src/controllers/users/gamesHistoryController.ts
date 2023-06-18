import { Request, Response, NextFunction } from 'express';
import type { GameHistoryI } from '../../models/map/gameHistory';
import { gameHistoryMapper } from '../../data/dataMappers/users/gameHistoryMapper';
import { BadRequestError } from '../../models/error';

type RequestParams = { id: number };

export const gamesHistoryController = {
  async getGamesHistory(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const gamesHistory = await gameHistoryMapper.readGamesHistory();
      res.status(200).json(gamesHistory);
    } catch (error) {
      next(error);
    }
  },

  async getGameHistory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = Number(req.params.id);
      const gameHistory = await gameHistoryMapper.readGameHistory(id);

      res
        .status(200)
        .json([
          { message: `Game History with id: ${id} found` },
          { gameHistory: gameHistory },
        ]);
    } catch (error) {
      next(error);
    }
  },

  async createGameHistory(
    req: Request<GameHistoryI>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const gameHistoryObj: GameHistoryI = req.body;

      if (
        !gameHistoryObj.user ||
        !gameHistoryObj.profile ||
        !gameHistoryObj.result ||
        !gameHistoryObj.map ||
        !gameHistoryObj.mapType ||
        !gameHistoryObj.mapImageUrl ||
        !gameHistoryObj.heroes ||
        !gameHistoryObj.heroesImageUrl
      ) {
        throw new BadRequestError('Invalid User Object.');
      } else {
        const newGameHistory = await gameHistoryMapper.createGameHistory(
          gameHistoryObj
        );
        res
          .status(201)
          .json([
            { message: `Game History created with id: ${newGameHistory.id}` },
            { gameHistory: newGameHistory },
          ]);
      }
    } catch (error) {
      next(error);
    }
  },

  async updateGameHistory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const gameHistoryObj: GameHistoryI = req.body;

      if (
        !gameHistoryObj.user ||
        !gameHistoryObj.profile ||
        !gameHistoryObj.result ||
        !gameHistoryObj.map ||
        !gameHistoryObj.mapType ||
        !gameHistoryObj.mapImageUrl ||
        !gameHistoryObj.heroes ||
        !gameHistoryObj.heroesImageUrl
      ) {
        throw new BadRequestError(
          'Invalid format: user, profile, result, map, mapType, mapImageUrl, heroes or heroesImageUrl battleTag missing'
        );
      }

      const updatedGameHistory = await gameHistoryMapper.updateGameHistory(
        gameHistoryObj
      );

      res
        .status(204)
        .json([
          { message: `Game History with id: ${updatedGameHistory.id} updated` },
          { updatedGameHistory: updatedGameHistory },
        ]);
    } catch (error) {
      next(error);
    }
  },

  async deleteGameHistory(
    req: Request<RequestParams>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = Number(req.params.id);
      await gameHistoryMapper.deleteGameHistory(id);
      res.status(204).json({ message: `Game History with id: ${id} deleted` });
    } catch (error) {
      next(error);
    }
  },
};
