import { Request, Response } from 'express';
import { dataMapper } from '../../data/dataMappers/maps/maps';

type RequestParams = { slug: string; type: string };

export const mapController = {
  findAll: async (_req: Request, res: Response): Promise<void> => {
    try {
      const allMaps = await dataMapper.findAll();
      res.json(allMaps);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  findOne: async (
    req: Request<RequestParams>,
    res: Response
  ): Promise<void> => {
    try {
      const { slug, type } = req.params;
      const mapWithSlug = await dataMapper.findBySlug(slug);

      if (mapWithSlug) {
        res.json(mapWithSlug);
      } else {
        res.status(404).json({
          error: `No Map with type: ${type.toUpperCase()} and slug: ${slug.toUpperCase()} was found`,
        });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  findByType: async (
    req: Request<RequestParams>,
    res: Response
  ): Promise<void> => {
    try {
      const type = req.params.type;
      const allMapsWithType = await dataMapper.findByType(type);

      if (allMapsWithType.length > 0) {
        res.json(allMapsWithType);
      } else {
        res
          .status(404)
          .json({ error: `No Map with type: ${type.toUpperCase()} was found` });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
