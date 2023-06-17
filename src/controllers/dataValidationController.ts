import { Request, Response, NextFunction } from 'express';
import type { UserCredentialsI } from '../models/user/user';

export const dataValidationController = {
  async sampleRoute(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userCredentials: UserCredentialsI = req.body;

      res.status(200).json({ userCredentials: req.body });
    } catch (error) {
      next(error);
    }
  },
};
