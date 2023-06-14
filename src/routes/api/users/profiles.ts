import { Router } from 'express';
import { profileController } from '../../../controllers/users/profileController';
const profileRouter = Router();

profileRouter
  .route('/')
  .get(profileController.getProfiles)
  .post(profileController.createProfile);

profileRouter
  .route('/:id')
  .get(profileController.getProfile)
  .patch(profileController.updateProfile)
  .delete(profileController.deleteProfile);

export default profileRouter;
