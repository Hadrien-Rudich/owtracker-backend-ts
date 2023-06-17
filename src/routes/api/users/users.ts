import { Router } from 'express';
import { userController } from '../../../controllers/users/userController';

const userRouter = Router();

userRouter
  .route('/')
  .get(userController.getUserAccounts)
  .post(userController.registerUserAccount);

userRouter
  .route('/:id')
  .get(userController.getUserAccount)
  .patch(userController.updateUserAccount)
  .delete(userController.deleteUserAccount);

export default userRouter;
