import { Router } from 'express';
import { profileController } from '../../../controllers/users/profileController';
import { validateData } from '../../../services/dataValidation/validator';
import { ProfileSchema } from '../../../services/dataValidation/schemas/profile';

const profileRouter = Router();

profileRouter
  .route('/')
  .get(profileController.getProfiles)
  .post(validateData(ProfileSchema.create), profileController.createProfile);

profileRouter
  .route('/:id')
  .get(profileController.getProfile)
  .patch(validateData(ProfileSchema.update), profileController.updateProfile)
  .delete(profileController.deleteProfile);

export default profileRouter;
