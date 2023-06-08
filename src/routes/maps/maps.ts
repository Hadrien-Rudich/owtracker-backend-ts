import { Router } from 'express';
import { mapController } from '../../controllers/maps/mapController';

const heroRouter = Router();

heroRouter.get('/', mapController.findAll);
heroRouter.get('/:type', mapController.findByType);
heroRouter.get('/:type/:slug', mapController.findOne);

export default heroRouter;
