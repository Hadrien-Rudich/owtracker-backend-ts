import { Router } from 'express';
import { authController } from '../../../controllers/users/authController';
import { userController } from '../../../controllers/users/userController';
import { validateData } from '../../../services/dataValidation/validator';
import { UserSchema } from '../../../services/dataValidation/schemas/user';

const authRouter = Router();

authRouter
  .route('/login')
  .post(validateData(UserSchema.login), authController.logIn);

authRouter
  .route('/register')
  .post(validateData(UserSchema.register), userController.registerUserAccount);

export default authRouter;
