import { CreateTypeController } from "@modules/types/useCases/createType/CreateTypeController";
import { DeleteTypeController } from "@modules/types/useCases/deleteType/DeleteTypeController";
import { GetAllTypesController } from "@modules/types/useCases/getAllTypes/GetAllTypesController";
import { GetOneTypeController } from "@modules/types/useCases/getOneType/GetOneTypeController";
import { UpdateTypeController } from "@modules/types/useCases/updateType/UpdateTypeController";
import { Router } from "express";

const typeRoutes = Router();
const createTypeController = new CreateTypeController();
const updateTypeController = new UpdateTypeController();
const deleteTypeController = new DeleteTypeController();
const getAllTypesController = new GetAllTypesController();
const getOneTypesController = new GetOneTypeController();

typeRoutes.get("/", getAllTypesController.handle);

typeRoutes.get("/:id", getOneTypesController.handle);

typeRoutes.post("/", createTypeController.handle);

typeRoutes.put("/:id", updateTypeController.handle);

typeRoutes.delete("/:id", deleteTypeController.handle);

export { typeRoutes };
