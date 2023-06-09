import { Request, Response } from 'express';
import { heroMapper } from '../../data/dataMappers/heroes/heroMapper';
import { NotFoundError } from '../../models/error';

type RequestParams = { slug: string; role: string };

export const heroController = {
  findAll: async (_req: Request, res: Response): Promise<void> => {
    try {
      const allHeroes = await heroMapper.findAll();
      res.status(200).json(allHeroes);
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(500).json({ error: errorMessage });
    }
  },

  findBySlug: async (
    req: Request<RequestParams>,
    res: Response
  ): Promise<void> => {
    try {
      const { slug } = req.params;
      const heroWithSlug = await heroMapper.findBySlug(slug);
      res.status(200).json(heroWithSlug);
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json({ error: error.message });
      } else {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });
      }
    }
  },

  findByRole: async (
    req: Request<RequestParams>,
    res: Response
  ): Promise<void> => {
    try {
      const role = req.params.role;
      const heroesWithRole = await heroMapper.FindByRole(role);

      if (heroesWithRole) {
        res.status(200).json(heroesWithRole);
      }
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json({ error: error.message });
      } else {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });
      }
    }
  },
};
