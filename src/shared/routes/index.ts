import { Router } from 'express';

import { typeRoutes } from './type';

const routes = Router();

routes.use('/type', typeRoutes);

export { routes };
