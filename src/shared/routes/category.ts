import { Router } from 'express';

import { CreateCategoryController } from '@modules/categories/useCases/createCategory/CreateCategoryController';
import { DeleteCategoryController } from '@modules/categories/useCases/deleteCategory/DeleteCategoryController';
import { GetAllCategoriesController } from '@modules/categories/useCases/getAllCategories/GetAllCategoriesController';
import { GetOneCategoryController } from '@modules/categories/useCases/getOneCategory/GetOneCategoryController';
import { UpdateCategoryController } from '@modules/categories/useCases/updateCategory/UpdateCategoryController';

const categoryRoutes = Router();
const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const getAllCategoriesController = new GetAllCategoriesController();
const getOneCategoryController = new GetOneCategoryController();

categoryRoutes.get('/', getAllCategoriesController.handle);

categoryRoutes.get(
  '/:id',
  getOneCategoryController.handle,
);

categoryRoutes.post(
  '/',
  createCategoryController.handle,
);

categoryRoutes.put(
  '/:id',
  updateCategoryController.handle,
);

categoryRoutes.delete(
  '/:id',
  deleteCategoryController.handle,
);

export { categoryRoutes };
