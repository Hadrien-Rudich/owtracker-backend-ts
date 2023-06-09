import { Request, Response } from 'express';
import { dataMapper } from '../../data/dataMappers/maps/mapTypes';

export const mapTypeController = {
  findAll: async (_req: Request, res: Response): Promise<void> => {
    try {
      const allMapTypes = await dataMapper.findAll();
      res.json(allMapTypes);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
