import { NextFunction, Request, Response } from 'express';
import { ProfileI } from '../../models/user/profile';
import { profileMapper } from '../../data/dataMappers/users/profileMapper';

type RequestParams = { id: number };

export const profileController = {
  getProfiles: async (
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const profiles = await profileMapper.readProfiles();
      res.status(200).json(profiles);
    } catch (error) {
      next(error);
    }
  },

  async getProfile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = Number(req.params.id);
      const profile = await profileMapper.readProfile(id);

      res
        .status(200)
        .json([
          { message: `Profile with id: ${id} found` },
          { profile: profile },
        ]);
    } catch (error) {
      next(error);
    }
  },

  createProfile: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { newProfileLabel } = req.body;
      const newProfile = await profileMapper.createProfile(newProfileLabel);
      res.status(200).json(newProfile);
    } catch (error) {
      next(error);
    }
  },

  async updateProfile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const profileObj: ProfileI = req.body;
      await profileMapper.updateProfile(profileObj);
      res
        .status(200)
        .json([
          { message: `Profile with id: ${profileObj.id} updated` },
          { updatedProfile: profileObj },
        ]);
    } catch (error) {
      next(error);
    }
  },

  deleteProfile: async (
    req: Request<RequestParams>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const updatedProfiles = await profileMapper.deleteProfile(id);
      res.json(updatedProfiles);
    } catch (error) {
      next(error);
    }
  },
};
