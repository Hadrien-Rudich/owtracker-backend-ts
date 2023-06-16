import { Request, Response, NextFunction } from 'express';
import { userMapper } from '../../data/dataMappers/users/userMapper';
import { comparePasswords } from '../../services/passwordHash';
import { BadRequestError, InvalidCredentials } from '../../models/error';

export const authController = {
  async logIn(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new BadRequestError('Invalid User Object');
      }

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
