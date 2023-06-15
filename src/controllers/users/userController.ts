import { Request, Response, NextFunction } from 'express';
import type { UserI } from '../../models/user/user';
import { userMapper } from '../../data/dataMappers/users/userMapper';

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
      const id = Number(req.params.id);
      const user = await userMapper.readUser(id);

      res
        .status(200)
        .json([{ message: `User with id: ${id} found` }, { user: user }]);
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
      const newUser = await userMapper.createUser(userObj);
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
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userObj: UserI = req.body;
      const updatedUser = await userMapper.updateUser(userObj);

      res
        .status(204)
        .json([
          { message: `User with id: ${updatedUser.id} updated` },
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
      const id = Number(req.params.id);
      await userMapper.deleteUser(id);
      res.status(204).json({ message: `User with id: ${id} deleted` });
    } catch (error) {
      next(error);
    }
  },
};
