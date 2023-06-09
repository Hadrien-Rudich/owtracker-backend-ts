import { Request, Response } from 'express';
import type { User } from '../../models/user';
import { userMapper } from '../../data/dataMappers/users/userMapper';
import { BadRequestError, NotFoundError } from '../../models/error';

interface RequestParams {
  id: number;
}

export const userController = {
  async getUsers(_req: Request, res: Response): Promise<void> {
    try {
      const users = await userMapper.readUsers();
      res.status(200).json(users);
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(500).json({ error: errorMessage });
    }
  },

  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const user = await userMapper.readUser(id);

      if (user) {
        res
          .status(200)
          .json([{ message: `User with id: ${id} was found` }, { user: user }]);
      } else {
        throw new NotFoundError(`No User with id: ${id} was found`);
      }
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json({ error: error.message });
      } else {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });
      }
    }
  },

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const userObj: User = req.body;
      const newUser = await userMapper.createUser(userObj);
      res
        .status(201)
        .json([
          { message: `User created with id: ${newUser.id}` },
          { user: newUser },
        ]);
    } catch (error) {
      if (error instanceof BadRequestError) {
        res.status(400).json({ error: error.message });
      } else {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });
      }
    }
  },

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const userObj: User = req.body;
      await userMapper.updateUser(userObj);
      res
        .status(200)
        .json([
          { message: `User with id: ${userObj.id} was updated` },
          { updatedProfile: userObj },
        ]);
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json({ error: error.message });
      } else {
        const errorMessage = (error as Error).message;
        res.status(400).json({ error: errorMessage });
      }
    }
  },

  async deleteUser(req: Request<RequestParams>, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      await userMapper.deleteUser(id);
      res.status(200).json({ message: `User with id: ${id} was deleted` });
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json({ error: error.message });
      } else {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });
      }
    }
  },
};
