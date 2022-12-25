import { CreateTransactionController } from "@modules/transactions/useCases/createTransaction/CreateTransactionController";
import { DeleteTransactionController } from "@modules/transactions/useCases/deleteTransaction/DeleteTransactionController";
import { GetAllTransactionsController } from "@modules/transactions/useCases/getAllTransactions/GetAllTransactionsController";
import { GetOneTransactionController } from "@modules/transactions/useCases/getOneTransaction/GetOneTransactionController";
import { UpdateTransactionController } from "@modules/transactions/useCases/updateTransaction/UpdateTransactionController";
import { createTransactionSchema } from "@modules/transactions/validations/CreateTransactionSchema";
import { deleteTransactionSchema } from "@modules/transactions/validations/DeleteTransactionSchema";
import { getOneTransactionSchema } from "@modules/transactions/validations/GetOneTransactionSchema";
import { updateTransactionSchema } from "@modules/transactions/validations/UpdateTransactionSchema";
import { ensureAuthenticated } from "@shared/middlewares/ensureAuthenticated";
import { validateFields } from "@shared/middlewares/validateFields";
import { Router } from "express";

const transactionRoutes = Router();
const createTransactionController = new CreateTransactionController();
const updateTransactionController = new UpdateTransactionController();
const deleteTransactionController = new DeleteTransactionController();
const getAllTransactionsController = new GetAllTransactionsController();
const getOneTransactionController = new GetOneTransactionController();

transactionRoutes.use(ensureAuthenticated);

transactionRoutes.get("/", getAllTransactionsController.handle);

transactionRoutes.get(
  "/:id",
  validateFields(getOneTransactionSchema),
  getOneTransactionController.handle
);

transactionRoutes.post(
  "/",
  validateFields(createTransactionSchema),
  createTransactionController.handle
);

transactionRoutes.put(
  "/:id",
  validateFields(updateTransactionSchema),
  updateTransactionController.handle
);

transactionRoutes.delete(
  "/:id",
  validateFields(deleteTransactionSchema),
  deleteTransactionController.handle
);

export { transactionRoutes };
