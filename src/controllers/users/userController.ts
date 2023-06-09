import { Request, Response } from 'express';
import type { UserI } from '../../models/user';
import { userMapper } from '../../data/dataMappers/users/userMapper';
interface RequestParams {
  id: number;
}
export const userController = {
  async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await userMapper.readUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const user = await userMapper.readUser(id);

      if (user) {
        res.json([
          { message: `User with id: ${id} was found` },
          { user: user },
        ]);
      } else {
        res.status(404).json({ error: `No User with id: ${id} was found` });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const userObj: UserI = req.body;
      const newUser = await userMapper.createUser(userObj);
      res.json([
        { message: `User created with id: ${newUser.id}` },
        { user: newUser },
      ]);
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(400).json({ error: errorMessage });
    }
  },

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const userObj: UserI = req.body;
      await userMapper.updateUser(userObj);
      res.json([
        { message: `User with id: ${userObj.id} was updated` },
        { updatedProfile: userObj },
      ]);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async deleteUser(req: Request<RequestParams>, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      await userMapper.deleteUser(id);
      res.json({ message: `User with id: ${id} was deleted` });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
