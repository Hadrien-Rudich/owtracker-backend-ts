import { Router } from 'express';
import { validateData } from '../middlewares/dataValidation';
import { UserSchema } from '../services/dataValidation/schemas/user';
import { dataValidationController } from '../controllers/dataValidationController';

const dataValidationRouter = Router();

dataValidationRouter.post(
  '/',
  validateData(UserSchema.userLogin),
  dataValidationController.sampleRoute
);

export default dataValidationRouter;
