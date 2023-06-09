import { heroRoles } from './heroRolesData';
import type { HeroRole } from '../../../models/heroRole';

export const dataMapper = {
  async findAll(): Promise<HeroRole[]> {
    const allHeroRoles = heroRoles; // DB call to be implemented
    return allHeroRoles;
  },
};
