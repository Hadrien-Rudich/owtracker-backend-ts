import { Router } from 'express';
import { heroRoleController } from '../../controllers/heroes/heroRolesController';
const heroRoleRouter = Router();

heroRoleRouter.get('/', heroRoleController.findAll);

export default heroRoleRouter;
