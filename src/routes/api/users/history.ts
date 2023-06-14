import { Router } from 'express';
import { historyController } from '../../../controllers/users/historyController';
const historyRouter = Router();

historyRouter.get('/', historyController.findAll);
historyRouter.get('/:id', historyController.findOne);

export default historyRouter;
