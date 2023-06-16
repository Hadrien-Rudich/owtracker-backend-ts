import { Request, Response, NextFunction } from 'express';
import type { UserI } from '../../models/user/user';
import { userMapper } from '../../data/dataMappers/users/userMapper';
import { hashPassword, comparePasswords } from '../../services/passwordHash';
import { BadRequestError, EmailInUse } from '../../models/error';

type RequestParams = { id: number };

type RequestBody = UserI;

export const userController = {
  async getUsers(
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

  async getUser(
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

  async createUser(
    req: Request<RequestBody>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userObj: UserI = req.body;
      if (!userObj.battleTag || !userObj.email || !userObj.password) {
        throw new BadRequestError('Invalid User Object.');
      }
      const emailInUse = await userMapper.checkEmail(userObj.email);
      if (emailInUse) {
        throw new EmailInUse('Email already in use');
      }
      const hashedPassword = await hashPassword(userObj.password);

      const newUser = await userMapper.createUser({
        ...userObj,
        password: hashedPassword,
      });
      res
        .status(201)
        .json([
          { message: `User created with id: ${newUser.id}` },
          { user: newUser },
        ]);
    } catch (error) {
      next(error);
    }
  },

  async updateUser(
    req: Request<RequestParams>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = Number(req.params.id);
      const userObj: UserI = req.body;
      if (!userObj.email || !userObj.password || !userObj.battleTag) {
        throw new BadRequestError(
          'Invalid format: email, password or battleTag missing'
        );
      }
      const existingUser = await userMapper.readUser(userId);

      await comparePasswords(userObj.password, existingUser.password);

      if (userObj.newPassword) {
        userObj.password = await hashPassword(userObj.newPassword);
      }

      const updatedUser = await userMapper.updateUser(userId, userObj);

      res
        .status(200)
        .json([
          { message: `User with id: ${userId} updated` },
          { updatedUser: updatedUser },
        ]);
    } catch (error) {
      next(error);
    }
  },

  async deleteUser(
    req: Request<RequestParams>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = Number(req.params.id);
      await userMapper.deleteUser(userId);
      res.status(204).json({ message: `User with id: ${userId} deleted` });
    } catch (error) {
      next(error);
    }
  },
};
