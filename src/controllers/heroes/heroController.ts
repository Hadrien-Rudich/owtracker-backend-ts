import { Request, Response } from 'express';
import { dataMapper } from '../../data/dataMappers/heroes/heroes';

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
      const { slug, role } = req.params;
      const singleHero = await dataMapper.findBySlug(slug);

      if (singleHero) {
        res.json(singleHero);
      } else {
        res.status(404).json({
          error: `No Hero with type: ${role.toUpperCase()} slug: ${slug.toUpperCase()} was found`,
        });
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
        res.status(404).json({
          error: `No hero with role: ${role.toUpperCase()} was found`,
        });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
