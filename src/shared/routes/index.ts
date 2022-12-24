import { Router } from 'express';

import { typeRoutes } from './type';
import { categoryRoutes } from './category';

const routes = Router();

routes.use('/type', typeRoutes);
routes.use('/category', categoryRoutes);

export { routes };
