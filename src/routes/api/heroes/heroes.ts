import { Router } from 'express';
import { heroController } from '../../../controllers/heroes/heroController';

const heroRouter = Router();

heroRouter.get('/', heroController.getHeroes);
heroRouter.get('/:role', heroController.getHeroesByRole);
heroRouter.get('/:role/:slug', heroController.getHeroBySlug);

export default heroRouter;
