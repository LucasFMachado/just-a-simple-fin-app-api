import { Router } from "express";

import { categoryRoutes } from "./category";
import { transactionRoutes } from "./transaction";
import { typeRoutes } from "./type";
import { userRoutes } from "./user";

const routes = Router();

routes.use("/category", categoryRoutes);
routes.use("/transaction", transactionRoutes);
routes.use("/type", typeRoutes);
routes.use("/user", userRoutes);

export { routes };
