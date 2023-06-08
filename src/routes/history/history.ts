import { Router } from 'express';
import { historyController } from '../../controllers/history/historyController';

const historyRouter = Router();

historyRouter.get('/', historyController.findAll);
historyRouter.get('/:id', historyController.findOne);

export default historyRouter;
