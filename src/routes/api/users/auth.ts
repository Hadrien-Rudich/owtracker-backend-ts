import { Router } from 'express';
import { authController } from '../../../controllers/users/authController';

const authRouter = Router();

authRouter.post('/', authController.logIn);

export default authRouter;
