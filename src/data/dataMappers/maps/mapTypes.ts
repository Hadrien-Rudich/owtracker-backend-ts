import { mapTypes } from './mapTypesData';
import type { MapType } from '../../../models/mapType';

export const dataMapper = {
  async findAll(): Promise<MapType[]> {
    const allMapTypes = mapTypes; // DB call to be implemented
    return allMapTypes;
  },
};
