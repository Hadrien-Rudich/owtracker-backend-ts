import { Router } from 'express';
import { mapController } from '../../../controllers/maps/mapController';

const mapRouter = Router();

mapRouter.get('/', mapController.findAll);
mapRouter.get('/:type', mapController.findByType);
mapRouter.get('/:type/:slug', mapController.findOne);

export default mapRouter;
