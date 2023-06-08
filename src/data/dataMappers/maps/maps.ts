import { maps } from './mapsData';
import type { Map } from '../../../models/map';

export const dataMapper = {
  async findAll(): Promise<Map[]> {
    const allMaps = maps; // DB call to be implemented
    return allMaps;
  },

  async findBySlug(slug: string): Promise<Map | undefined> {
    const mapBySlug = maps.find((map) => map.slug === slug);
    return mapBySlug;
  },

  async findByType(type: string): Promise<Map[]> {
    const mapsByType = maps.filter((map) => map.type === type);
    return mapsByType;
  },
};
