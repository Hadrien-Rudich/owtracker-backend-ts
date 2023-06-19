import { Request, Response, NextFunction } from 'express';
import type { User } from '../../models/user/user';
import { userMapper } from '../../data/dataMappers/users/userMapper';
import { hashPassword } from '../../services/passwordHash';
import {
  EmailInUseError,
  InvalidPasswordError,
  NotFoundError,
} from '../../models/error';
import { comparePasswords } from '../../services/passwordHash';

export const userController = {
  async getUserAccounts(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const users = await userMapper.readUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },

  async getUserAccount(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = Number(req.params.id);
      const user = await userMapper.readUser(userId);
      res
        .status(200)
        .json([{ message: `User with id: ${userId} found` }, { user: user }]);
    } catch (error) {
      next(error);
    }
  },

  async registerUserAccount(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userObj: User.Registration = req.body;

      const emailInUse = await userMapper.checkEmail(userObj.email);
      if (emailInUse) {
        throw new EmailInUseError();
      }
      const hashedPassword = await hashPassword(userObj.password);

      const newUser = await userMapper.createUser({
        ...userObj,
        password: hashedPassword,
      });
      res
        .status(201)
        .json([{ message: `New User created}` }, { user: newUser }]);
    } catch (error) {
      next(error);
    }
  },

  async updateUserAccountDetails(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = Number(req.params.id);
      const userObj: User.Update = req.body;

      const updatedUser = await userMapper.updateUserDetails(userId, userObj);

      res
        .status(200)
        .json([
          { message: `User Details with id: ${userId} updated` },
          { updatedUser: updatedUser },
        ]);
    } catch (error) {
      next(error);
    }
  },

  async updateUserAccountPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = Number(req.params.id);
      const userObj: User.UpdatePassword = req.body;

      const user = await userMapper.readUser(userId);

      if (!user) {
        throw new NotFoundError();
      }

      const passwordMatch = await comparePasswords(
        userObj.password,
        user.password
      );
      if (!passwordMatch) {
        throw new InvalidPasswordError();
      }
      const hashedPassword = await hashPassword(userObj.newPassword);
      userObj.newPassword = hashedPassword;

      const updatedUser = await userMapper.updateUserPassword(userId, userObj);

      res
        .status(200)
        .json([
          { message: `User Password with id: ${userId} updated` },
          { updatedUser: updatedUser },
        ]);
    } catch (error) {
      next(error);
    }
  },

  async deleteUserAccount(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = Number(req.params.id);
      await userMapper.deleteUser(userId);
      res.status(200).json({ message: `User with id: ${userId} deleted` });
    } catch (error) {
      next(error);
    }
  },
};
