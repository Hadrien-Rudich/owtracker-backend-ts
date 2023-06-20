import { NextFunction, Request, Response } from 'express';
import type { Profile } from '../../models/user/profile';

import { profileMapper } from '../../data/dataMappers/users/profileMapper';

export const profileController = {
  async getProfiles(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
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

  async createProfile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const profileObj: Profile.New = req.body;
      const newProfile = await profileMapper.createProfile(profileObj);
      res
        .status(201)
        .json([
          { message: `Profile created with id: ${newProfile.id}` },
          { profile: newProfile },
        ]);
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
      const profileId = Number(req.params.id);
      const profileObj: Profile.Update = req.body;
      const updatedProfile = await profileMapper.updateProfile(
        profileId,
        profileObj
      );
      res
        .status(200)
        .json([
          { message: `Profile updated` },
          { updatedProfile: updatedProfile },
        ]);
    } catch (error) {
      next(error);
    }
  },

  async deleteProfile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const profileId = Number(req.params.id);
      await profileMapper.deleteProfile(profileId);
      res
        .status(200)
        .json({ message: `Profile with id: ${profileId} deleted` });
    } catch (error) {
      next(error);
    }
  },
};
