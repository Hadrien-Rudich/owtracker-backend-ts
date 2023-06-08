import { Request, Response } from 'express';
import { dataMapper } from '../../data/dataMappers/heroes';

type RequestParams = { slug: string; role: string };

export const heroController = {
  findAll: async (_req: Request, res: Response): Promise<void> => {
    try {
      const allHeroes = await dataMapper.findAll();
      res.json(allHeroes);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  findOne: async (
    req: Request<RequestParams>,
    res: Response
  ): Promise<void> => {
    try {
      const slug = req.params.slug;
      const singleHero = await dataMapper.findBySlug(slug);

      if (singleHero) {
        res.json(singleHero);
      } else {
        res
          .status(404)
          .json({ error: `Hero with slug: ${slug.toUpperCase()} not found` });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  findByRole: async (
    req: Request<RequestParams>,
    res: Response
  ): Promise<void> => {
    try {
      const role = req.params.role;
      const allHeroesWithRole = await dataMapper.FindByRole(role);

      if (allHeroesWithRole.length > 0) {
        res.json(allHeroesWithRole);
      } else {
        res
          .status(404)
          .json({ error: `Heroes with role: ${role.toUpperCase()} not found` });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
