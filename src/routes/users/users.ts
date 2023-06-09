import { Router } from 'express';
import { userController } from '../../controllers/users/userController';

const userRouter = Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/', userController.createUser);
userRouter.get('/:id', userController.getUser);
userRouter.patch('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

export default userRouter;
