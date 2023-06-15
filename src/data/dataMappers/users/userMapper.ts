import { users } from './usersData';
import type { UserI } from '../../../models/user/user';
import {
  BadRequestError,
  NotFoundError,
  InternalServerError,
} from '../../../models/error';

export const userMapper = {
  async readUsers(): Promise<UserI[]> {
    // to be edited with await and DB call
    if (users.length >= 1) {
      return users;
    } else {
      throw new InternalServerError('No Users found');
    }
  },

  async readUser(id: number): Promise<UserI> {
    // to be edited with await and DB call
    const user = users.find((user) => user.id === id);
    if (user) {
      return user;
    } else {
      throw new NotFoundError(`User with id: ${id} not found`);
    }
  },

  async createUser(userObj: UserI): Promise<UserI> {
    if (!userObj.battleTag || !userObj.email || !userObj.password) {
      throw new BadRequestError('Invalid User Object.');
    } else {
      // to be edited with await and DB call
      const newAccount = { ...userObj, id: Math.random() };
      users.push(newAccount);
      return newAccount;
    }
  },

  async updateUser(userObj: UserI): Promise<UserI> {
    const id = userObj.id;

    if (!id) {
      throw new BadRequestError('Invalid format: no ID provided');
    }

    const indexOfAccountToUpdate = users.findIndex(
      (account) => account.id === id
    );

    if (!userObj.email || !userObj.password || !userObj.battleTag) {
      throw new BadRequestError(
        'Invalid format: email, password or battleTag missing'
      );
    }

    if (indexOfAccountToUpdate !== -1) {
      const updatedAccount = { ...userObj };
      users[indexOfAccountToUpdate] = updatedAccount;
      return updatedAccount;
    } else {
      throw new NotFoundError(`User with id: ${id} not found`);
    }
  },

  async deleteUser(id: number): Promise<UserI[]> {
    // to be edited with await and DB call
    const indexOfAccountToDelete = users.findIndex(
      (account) => account.id === id
    );
    if (indexOfAccountToDelete !== -1) {
      users.splice(indexOfAccountToDelete, 1);
    } else {
      throw new NotFoundError(`User with id: ${id} not found`);
    }
    return users;
  },
};
