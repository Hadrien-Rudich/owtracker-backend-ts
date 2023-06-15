import { gamesHistory } from './gamesHistoryData';
import type { GameHistoryI } from '../../../models/map/gameHistory';
import { getCurrentDate } from '../../../utils/functions';
import {
  BadRequestError,
  NotFoundError,
  InternalServerError,
} from '../../../models/error';

export const gameHistoryMapper = {
  async readGamesHistory(): Promise<GameHistoryI[]> {
    // to be edited with await and DB call
    if (gamesHistory.length >= 1) {
      return gamesHistory;
    } else {
      throw new InternalServerError('No Games History found');
    }
  },

  async readGameHistory(id: number): Promise<GameHistoryI> {
    // to be edited with await and DB call
    const gameHistory = gamesHistory.find(
      (gameHistory) => gameHistory.id === id
    );
    if (gameHistory) {
      return gameHistory;
    } else {
      throw new NotFoundError(`Game History with id: ${id} not found`);
    }
  },

  async createGameHistory(gameHistoryObj: GameHistoryI): Promise<GameHistoryI> {
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
      // to be edited with await and DB call
      const dateNow = getCurrentDate();
      const newGameHistory = {
        ...gameHistoryObj,
        id: Math.random(),
        date: dateNow,
      };
      gamesHistory.push(newGameHistory);
      return newGameHistory;
    }
  },

  async updateGameHistory(gameHistoryObj: GameHistoryI): Promise<GameHistoryI> {
    const id = gameHistoryObj.id;

    if (!id) {
      throw new BadRequestError('Invalid format: no ID provided');
    }

    const indexOfGameHistoryToUpdate = gamesHistory.findIndex(
      (gameHistory) => gameHistory.id === id
    );

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

    if (indexOfGameHistoryToUpdate !== -1) {
      const updatedGameHistory = { ...gameHistoryObj };
      gamesHistory[indexOfGameHistoryToUpdate] = updatedGameHistory;
      return updatedGameHistory;
    } else {
      throw new NotFoundError(`Game History with id: ${id} not found`);
    }
  },

  async deleteGameHistory(id: number): Promise<GameHistoryI[]> {
    // to be edited with await and DB call
    const indexOfGameHistoryToDelete = gamesHistory.findIndex(
      (gameHistory) => gameHistory.id === id
    );
    if (indexOfGameHistoryToDelete !== -1) {
      gamesHistory.splice(indexOfGameHistoryToDelete, 1);
    } else {
      throw new NotFoundError(`Game History with id: ${id} not found`);
    }
    return gamesHistory;
  },
};
