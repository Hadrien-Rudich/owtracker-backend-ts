import { Request, Response, NextFunction } from 'express';
import { userMapper } from '../../data/dataMappers/users/userMapper';
import { comparePasswords } from '../../services/passwordHash';
import { BadRequestError, InvalidCredentials } from '../../models/error';

type RequestBody = { email: string; password: string };

export const authController = {
  async logIn(
    req: Request<RequestBody>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { email, password }: RequestBody = req.body;

      const user = await userMapper.readUserWithEmail(email);

      const passwordMatch = await comparePasswords(password, user.password);

      if (passwordMatch) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        throw new InvalidCredentials('Authentication failed');
      }
    } catch (error) {
      next(error);
    }
  },

  async logOut(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {},
};
