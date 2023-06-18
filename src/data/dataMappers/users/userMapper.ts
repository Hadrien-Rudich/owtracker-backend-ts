import { users } from './usersData';
import type { UserI, UserRegisterI } from '../../../models/user/user';
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

  async readUser(userId: number): Promise<UserI> {
    // to be edited with await and DB call
    const user = users.find((user) => user.id === userId);
    if (user) {
      return user;
    } else {
      throw new NotFoundError(`User with id: ${userId} not found`);
    }
  },

  async checkEmail(email: string): Promise<Boolean> {
    // to be edited with await and DB call
    const emailInUse = users.find((user) => user.email === email);
    return !!emailInUse;
  },

  async readUserWithEmail(email: string): Promise<UserI> {
    // to be edited with await and DB call
    const user = users.find((user) => user.email === email);
    if (user) {
      return user;
    } else {
      throw new NotFoundError(`User with email: ${email} not found`);
    }
  },

  async createUser(userObj: UserRegisterI): Promise<UserI> {
    // to be edited with await and DB call
    const newAccount = { ...userObj, id: Math.random() };
    users.push(newAccount);
    return newAccount;
  },

  async updateUser(userId: number, userObj: UserI): Promise<UserI> {
    const indexOfAccountToUpdate = users.findIndex(
      (user) => user.id === userId
    );

    if (indexOfAccountToUpdate !== -1) {
      const updatedAccount = { ...userObj };
      users[indexOfAccountToUpdate] = updatedAccount;
      return updatedAccount;
    } else {
      throw new NotFoundError(`User with id: ${userId} not found`);
    }
  },

  async deleteUser(userId: number): Promise<UserI[]> {
    // to be edited with await and DB call
    const indexOfAccountToDelete = users.findIndex(
      (user) => user.id === userId
    );
    if (indexOfAccountToDelete !== -1) {
      users.splice(indexOfAccountToDelete, 1);
    } else {
      throw new NotFoundError(`User with id: ${userId} not found`);
    }
    return users;
  },
};
