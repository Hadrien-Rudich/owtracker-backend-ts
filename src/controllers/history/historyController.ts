import { Request, Response } from 'express';
import { dataMapper } from '../../data/dataMappers/history/history';

type RequestParams = { id: number };

export const historyController = {
  findAll: async (_req: Request, res: Response): Promise<void> => {
    try {
      const allHistory = await dataMapper.findAll();
      res.json(allHistory);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  findOne: async (
    req: Request<RequestParams>,
    res: Response
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const gameHistory = await dataMapper.findByPk(id);

      if (gameHistory) {
        res.json(gameHistory);
      } else {
        res.status(404).json({
          error: `No game with id: ${id} was found`,
        });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
