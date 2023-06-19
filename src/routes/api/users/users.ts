import { Router } from 'express';
import { userController } from '../../../controllers/users/userController';
import { validateData } from '../../../services/dataValidation/validator';
import { UserSchema } from '../../../services/dataValidation/schemas/user';

const userRouter = Router();

userRouter.route('/').get(userController.getUserAccounts);

userRouter
  .route('/:id/')
  .get(userController.getUserAccount)
  .delete(userController.deleteUserAccount);

userRouter
  .route('/:id/details')
  .patch(
    validateData(UserSchema.update),
    userController.updateUserAccountDetails
  );

userRouter
  .route('/:id/security')
  .patch(
    validateData(UserSchema.updatePassword),
    userController.updateUserAccountPassword
  );

export default userRouter;
