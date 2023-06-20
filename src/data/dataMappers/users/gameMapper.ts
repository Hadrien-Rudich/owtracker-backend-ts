import { games } from './gamesData';
import { Game } from '../../../models/map/game';
import { getCurrentDate } from '../../../utils/functions';
import { NotFoundError, InternalServerError } from '../../../models/error';

export const gameMapper = {
  async readGames(): Promise<Game.Base[]> {
    // to be edited with await and DB call
    if (games.length >= 1) {
      return games;
    } else {
      throw new InternalServerError('No Games found');
    }
  },

  async readGame(id: number): Promise<Game.Base> {
    // to be edited with await and DB call
    const game = games.find((game) => game.id === id);
    if (game) {
      return game;
    } else {
      throw new NotFoundError(`Game with id: ${id} not found`);
    }
  },

  async createGame(gameObj: Game.New): Promise<Game.Base> {
    // to be edited with await and DB call
    const dateNow = getCurrentDate();
    const newGame = { ...gameObj, id: Math.random(), date: dateNow };
    games.push(newGame);
    return newGame;
  },

  async updateGame(gameId: number, gameObj: Game.Update): Promise<Game.Base> {
    // to be edited with await and DB call
    const indexOfGameToUpdate = games.findIndex((game) => game.id === gameId);

    if (indexOfGameToUpdate !== -1) {
      const updatedGame = { ...games[indexOfGameToUpdate], ...gameObj };
      games[indexOfGameToUpdate] = updatedGame;
      return updatedGame;
    } else {
      throw new NotFoundError(`Game with id: ${gameId} not found`);
    }
  },

  async deleteGame(gameId: number): Promise<Game.Base[]> {
    // to be edited with await and DB call
    const indexOfGameToDelete = games.findIndex((game) => game.id === gameId);
    if (indexOfGameToDelete !== -1) {
      // to be edited with await and DB call
      games.splice(indexOfGameToDelete, 1);
    } else {
      throw new NotFoundError(`Game with id: ${gameId} not found`);
    }
    return games;
  },
};
