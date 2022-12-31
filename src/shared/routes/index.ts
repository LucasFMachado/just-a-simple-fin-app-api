import { Router } from "express";

import { categoryRoutes } from "./category";
import { transactionRoutes } from "./transaction";
import { typeRoutes } from "./type";
import { userRoutes } from "./user";

const routes = Router();

routes.use("/categories", categoryRoutes);
routes.use("/transactions", transactionRoutes);
routes.use("/types", typeRoutes);
routes.use("/users", userRoutes);

export { routes };
