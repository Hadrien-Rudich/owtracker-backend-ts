import { Router } from 'express';
import { mapTypeController } from '../../../controllers/maps/mapTypeController';

const mapTypeRouter = Router();

mapTypeRouter.get('/', mapTypeController.findAll);

export default mapTypeRouter;
