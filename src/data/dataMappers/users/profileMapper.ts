import { profiles } from './profilesData';
import type { ProfileI } from '../../../models/user/profile';
import {
  BadRequestError,
  NotFoundError,
  InternalServerError,
} from '../../../models/error';

export const profileMapper = {
  async readProfiles(): Promise<ProfileI[]> {
    // to be edited with await and DB call
    if (profiles.length >= 1) {
      return profiles;
    } else {
      throw new InternalServerError('No Profiles found');
    }
  },

  async readProfile(id: number): Promise<ProfileI> {
    // to be edited with await and DB call
    const profile = profiles.find((profile) => profile.id === id);
    if (profile) {
      return profile;
    } else {
      throw new NotFoundError(`Profile with id: ${id} not found`);
    }
  },

  async createProfile(profile: string): Promise<ProfileI> {
    if (!profile) {
      throw new BadRequestError('Invalid Profile Object.');
    } else {
      // to be edited with await and DB call
      const newProfile = { label: profile, id: Math.random() };
      profiles.push(newProfile);
      return newProfile;
    }
  },

  async updateProfile(profileObj: ProfileI): Promise<ProfileI | undefined> {
    const id = profileObj.id;

    if (!id) {
      throw new BadRequestError('Invalid format: no ID provided');
    }

    const indexOfProfileToUpdate = profiles.findIndex(
      (profile) => profile.id === id
    );

    if (!profileObj.label) {
      throw new BadRequestError('Invalid format: label missing');
    }

    if (indexOfProfileToUpdate !== -1) {
      const updatedProfile = { ...profileObj };
      profiles[indexOfProfileToUpdate] = updatedProfile;
      return updatedProfile;
    } else {
      throw new NotFoundError(`Profile with id: ${id} not found`);
    }
  },

  async deleteProfile(id: number): Promise<ProfileI[]> {
    // to be edited with await and DB call
    const indexOfProfileToDelete = profiles.findIndex(
      (profile) => profile.id === id
    );

    if (indexOfProfileToDelete !== -1) {
      profiles.splice(indexOfProfileToDelete, 1);
    } else {
      throw new NotFoundError(`Profile with id: ${id} was not found`);
    }
    return profiles;
  },
};
