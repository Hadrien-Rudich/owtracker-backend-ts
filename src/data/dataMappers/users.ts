import { users } from './usersData';
import type { User } from '../../models/user';

export const dataMapper = {
  async findAll(): Promise<User[]> {
    // to be edited with await once DB hooked
    return users;
  },

  async findByPk(id: number): Promise<User | undefined> {
    // to be edited with await once DB hooked
    return users.find((user) => user.id === Number(id));
  },
};
