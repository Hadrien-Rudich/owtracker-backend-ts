import { history } from './historyData';
import type { History } from '../../../models/history';

export const dataMapper = {
  async findAll(): Promise<History[]> {
    const allHistory = history; // DB call to be implemented
    return allHistory;
  },

  async findByPk(id: number): Promise<History | undefined> {
    const gameHistory = history.find((game) => game.id === id);
    return gameHistory;
  },
};
