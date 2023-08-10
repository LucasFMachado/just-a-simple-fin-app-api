import "reflect-metadata";
import "express-async-errors";
import "./shared/containers";

import createConnection from "@shared/database";
import { errorsMananger } from "@shared/middlewares/errorsMananger";
import { routes } from "@shared/routes";
import cors from "cors";
import express from "express";

createConnection();
const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errorsMananger);

app.listen(process.env.PORT || 3333, () =>
  console.log(`Server is running on port ${process.env.PORT || 3333}!`)
);
