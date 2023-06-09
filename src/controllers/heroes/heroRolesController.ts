import { Request, Response } from 'express';
import { dataMapper } from '../../data/dataMappers/heroes/heroRoles';

export const heroRoleController = {
  findAll: async (_req: Request, res: Response): Promise<void> => {
    try {
      const allHeroRoles = await dataMapper.findAll();
      res.json(allHeroRoles);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
