import { Request, Response } from 'express';
import { dataMapper } from '../../data/dataMapper/users';

type RequestParams = { id: number };

export const userController = {
  findAll: async (_req: Request, res: Response): Promise<void> => {
    try {
      const users = await dataMapper.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  findOne: async (
    req: Request<RequestParams>,
    res: Response
  ): Promise<void> => {
    try {
      const id = req.params.id;
      const user = await dataMapper.findByPk(id);

      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
