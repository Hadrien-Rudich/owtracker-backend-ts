import { Request, Response, NextFunction } from 'express';
import type { UserI } from '../../models/user';
import { userMapper } from '../../data/dataMappers/users/userMapper';
interface RequestParams {
  id: number;
}

export const userController = {
  async getUsers(
    req: Request,
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
        .json([{ message: `User with id: ${id} was found` }, { user: user }]);
    } catch (error) {
      next(error);
    }
  },

  async createUser(
    req: Request,
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
      await userMapper.updateUser(userObj);
      res
        .status(200)
        .json([
          { message: `User with id: ${userObj.id} was updated` },
          { updatedProfile: userObj },
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
      res.status(200).json({ message: `User with id: ${id} was deleted` });
    } catch (error) {
      next(error);
    }
  },
};
