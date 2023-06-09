import { users } from './usersData';
import { UserI } from '../../../models/user';

export const userMapper = {
  async readUsers(): Promise<UserI[]> {
    // to be edited with await and DB call
    if (users.length >= 1) {
      return users;
    } else {
      throw new Error('No users found');
    }
  },

  async readUser(id: number): Promise<UserI | undefined> {
    // to be edited with await and DB call
    const user = users.find((user) => user.id === id);
    if (user) {
      return user;
    } else {
      throw new Error('User was not found.');
    }
  },

  async createUser(userObj: UserI): Promise<UserI> {
    if (!userObj.battleTag || !userObj.email || !userObj.password) {
      throw new Error('Incomplete user object');
    } else {
      // to be edited with await and DB call
      const newAccount = { ...userObj, id: Math.random() };
      users.push(newAccount);
      return newAccount;
    }
  },

  async updateUser(userObj: UserI): Promise<UserI> {
    const id = userObj.id;
    // to be edited with await and DB call
    const indexOfAccountToUpdate = users.findIndex(
      (account) => account.id === id
    );

    if (indexOfAccountToUpdate !== -1) {
      const updatedAccount = { ...userObj };
      users[indexOfAccountToUpdate] = updatedAccount;
      return updatedAccount;
    } else {
      throw new Error('User was not updated.');
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
      throw new Error('User was not deleted.');
    }
    return users;
  },
};
