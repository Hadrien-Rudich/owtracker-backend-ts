import { Router } from 'express';
import { userController } from '../../controllers/users/userController';

const userRouter = Router();

userRouter.get('/', userController.findAll);
userRouter.get('/:id', userController.findOne);

export default userRouter;
