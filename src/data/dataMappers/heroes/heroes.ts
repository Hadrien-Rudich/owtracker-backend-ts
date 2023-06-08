import { heroes } from './heroesData';
import type { Hero } from '../../../models/hero';

export const dataMapper = {
  async findAll(): Promise<Hero[]> {
    const allHeroes = heroes; // DB call to be implemented
    return allHeroes;
  },

  async findBySlug(slug: string): Promise<Hero | undefined> {
    const heroBySlug = heroes.find((hero) => hero.slug === slug);
    return heroBySlug;
  },

  async FindByRole(role: string): Promise<Hero[]> {
    const heroesByRole = heroes.filter((hero) => hero.role === role);
    return heroesByRole;
  },
};
