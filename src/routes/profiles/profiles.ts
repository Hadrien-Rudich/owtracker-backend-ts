import { Router } from 'express';
import { profileController } from '../../controllers/profiles/profileController';
const profileRouter = Router();

profileRouter.get('/', profileController.findAll);
profileRouter.post('/', profileController.addOne);
profileRouter.delete('/', profileController.deleteOne);

export default profileRouter;
