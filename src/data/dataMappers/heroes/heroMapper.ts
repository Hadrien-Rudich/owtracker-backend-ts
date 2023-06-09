import { heroes } from './heroesData';
import type { Hero } from '../../../models/hero';
import {
  BadRequestError,
  NotFoundError,
  InternalServerError,
} from '../../../models/error';

export const heroMapper = {
  async findAll(): Promise<Hero[]> {
    // to be edited with await and DB call
    if (heroes.length >= 1) {
      return heroes;
    } else {
      throw new InternalServerError('No Heroes were found');
    }
  },

  async findBySlug(slug: string): Promise<Hero | undefined> {
    // to be edited with await and DB call
    const heroBySlug = heroes.find((hero) => hero.slug === slug);
    if (heroBySlug) {
      return heroBySlug;
    } else {
      throw new NotFoundError(`Hero with slug: ${slug} was not found`);
    }
  },

  async FindByRole(role: string): Promise<Hero[]> {
    const heroesByRole = heroes.filter((hero) => hero.role === role);
    if (heroesByRole.length >= 1) {
      return heroesByRole;
    } else {
      throw new NotFoundError(`No Hero with role: ${role} was found`);
    }
  },
};
