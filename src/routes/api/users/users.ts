import { Router } from 'express';
import { userController } from '../../../controllers/users/userController';

const userRouter = Router();

userRouter
  .route('/')
  .get(userController.getUsers)
  .post(userController.createUser);

userRouter
  .route('/:id')
  .get(userController.getUsers)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default userRouter;
