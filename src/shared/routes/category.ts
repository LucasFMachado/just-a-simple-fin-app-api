import { CreateCategoryController } from "@modules/categories/useCases/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "@modules/categories/useCases/deleteCategory/DeleteCategoryController";
import { GetAllCategoriesController } from "@modules/categories/useCases/getAllCategories/GetAllCategoriesController";
import { GetOneCategoryController } from "@modules/categories/useCases/getOneCategory/GetOneCategoryController";
import { UpdateCategoryController } from "@modules/categories/useCases/updateCategory/UpdateCategoryController";
import { createCategorySchema } from "@modules/categories/validations/CreateCategorySchema";
import { deleteCategorySchema } from "@modules/categories/validations/DeleteCategorySchema";
import { getOneCategorySchema } from "@modules/categories/validations/GetOneCategorySchema";
import { updateCategorySchema } from "@modules/categories/validations/UpdateCategorySchema";
import { validateFields } from "@shared/middlewares/validateFields";
import { Router } from "express";

const categoryRoutes = Router();
const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const getAllCategoriesController = new GetAllCategoriesController();
const getOneCategoryController = new GetOneCategoryController();

categoryRoutes.get("/", getAllCategoriesController.handle);

categoryRoutes.get(
  "/:id",
  validateFields(getOneCategorySchema),
  getOneCategoryController.handle
);

categoryRoutes.post(
  "/",
  validateFields(createCategorySchema),
  createCategoryController.handle
);

categoryRoutes.put(
  "/:id",
  validateFields(updateCategorySchema),
  updateCategoryController.handle
);

categoryRoutes.delete(
  "/:id",
  validateFields(deleteCategorySchema),
  deleteCategoryController.handle
);

export { categoryRoutes };
