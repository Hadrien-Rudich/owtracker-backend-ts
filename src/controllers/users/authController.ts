import { Request, Response, NextFunction } from 'express';
import { userMapper } from '../../data/dataMappers/users/userMapper';
import { comparePasswords } from '../../services/passwordHash';
import { InvalidCredentialsError } from '../../models/error';
import { User } from '../../models/user/user';
import { generateAccessToken } from '../../services/authentication/tokenGen';

export const authController = {
  async logIn(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password }: User.Login = req.body;

      const user = await userMapper.readUserWithEmail(email);

      const passwordMatch = await comparePasswords(password, user.password);

      if (passwordMatch) {
        const accessToken = await generateAccessToken(user);
        res.status(200).json({
          user,
          accessToken,
          message: 'Login successful',
        });
      } else {
        throw new InvalidCredentialsError();
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
