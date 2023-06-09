import { Request, Response } from 'express';
import { dataMapper } from '../../data/dataMappers/profiles/profiles';

type RequestBody = { id: number };

export const profileController = {
  findAll: async (_req: Request, res: Response): Promise<void> => {
    try {
      const allProfiles = await dataMapper.findAll();
      res.json(allProfiles);
    } catch (error) {
      console.error('Error occurred while fetching profiles:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  addOne: async (req: Request, res: Response): Promise<void> => {
    try {
      const { newProfileLabel } = req.body;
      const newProfile = await dataMapper.addOne(newProfileLabel);

      res.json(newProfile);
    } catch (error) {
      console.error('Error occurred while adding a profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteOne: async (
    req: Request<RequestBody>,
    res: Response
  ): Promise<void> => {
    try {
      const { id } = req.body;
      const updatedProfiles = await dataMapper.deleteOne(id);

      if (!updatedProfiles) {
        res.status(404).json({ error: 'Profile not found' });
      } else {
        res.json(updatedProfiles);
      }
    } catch (error) {
      console.error('Error occurred while deleting a profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
