import { Router } from 'express';
import { heroController } from '../../controllers/heroes/heroController';

const heroRouter = Router();

heroRouter.get('/', heroController.findAll);
heroRouter.get('/:role', heroController.findByRole);
heroRouter.get('/:role/:slug', heroController.findBySlug);

export default heroRouter;
