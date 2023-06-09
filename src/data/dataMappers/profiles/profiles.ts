import { profiles } from './profilesData';
import type { Profile } from '../../../models/profile';

export const dataMapper = {
  async findAll(): Promise<Profile[]> {
    const allProfiles = profiles; // DB call to be implemented
    return allProfiles;
  },

  async addOne(profile: string) {
    const newProfile = { id: Math.random(), label: profile };

    profiles.push(newProfile); // DB call to be implemented
    return newProfile;
  },

  async deleteOne(id: number) {
    const profileIndex = profiles.findIndex((profile) => profile.id === id);

    if (profileIndex === -1) {
      throw new Error('Profile not found.');
    }

    profiles.splice(profileIndex, 1); // DB call to be implemented

    return profiles;
  },
};
