import { CreateTypeController } from "@modules/types/useCases/createType/CreateTypeController";
import { DeleteTypeController } from "@modules/types/useCases/deleteType/DeleteTypeController";
import { GetAllTypesController } from "@modules/types/useCases/getAllTypes/GetAllTypesController";
import { GetOneTypeController } from "@modules/types/useCases/getOneType/GetOneTypeController";
import { UpdateTypeController } from "@modules/types/useCases/updateType/UpdateTypeController";
import { createTypeSchema } from "@modules/types/validations/CreateTypeSchema";
import { deleteTypeSchema } from "@modules/types/validations/DeleteTypeSchema";
import { getOneTypeSchema } from "@modules/types/validations/GetOneTypeSchema";
import { updateTypeSchema } from "@modules/types/validations/UpdateTypeSchema";
import { ensureAuthenticated } from "@shared/middlewares/ensureAuthenticated";
import { validateFields } from "@shared/middlewares/validateFields";
import { Router } from "express";

const typeRoutes = Router();
const createTypeController = new CreateTypeController();
const updateTypeController = new UpdateTypeController();
const deleteTypeController = new DeleteTypeController();
const getAllTypesController = new GetAllTypesController();
const getOneTypesController = new GetOneTypeController();

typeRoutes.use(ensureAuthenticated);

typeRoutes.get("/", getAllTypesController.handle);

typeRoutes.get(
  "/:id",
  validateFields(getOneTypeSchema),
  getOneTypesController.handle
);

typeRoutes.post(
  "/",
  validateFields(createTypeSchema),
  createTypeController.handle
);

typeRoutes.put(
  "/:id",
  validateFields(updateTypeSchema),
  updateTypeController.handle
);

typeRoutes.delete(
  "/:id",
  validateFields(deleteTypeSchema),
  deleteTypeController.handle
);

export { typeRoutes };
