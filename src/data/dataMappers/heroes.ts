import { heroes } from './heroesData';
import type { Hero } from '../../models/hero';

export const dataMapper = {
  async findAll(): Promise<Hero[]> {
    // to be edited with await once DB hooked
    return heroes;
  },

  async findBySlug(slug: string): Promise<Hero | undefined> {
    const hero = heroes.find((hero) => hero.slug === slug);
    return hero;
  },

  async FindByRole(role: string): Promise<Hero[]> {
    const hero = heroes.filter((hero) => hero.role === role);
    return hero;
  },
};
