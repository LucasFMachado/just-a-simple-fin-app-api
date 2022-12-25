import { CreateTransactionController } from "@modules/transactions/useCases/createTransaction/CreateTransactionController";
import { DeleteTransactionController } from "@modules/transactions/useCases/deleteTransaction/DeleteTransactionController";
import { GetAllTransactionsController } from "@modules/transactions/useCases/getAllTransactions/GetAllTransactionsController";
import { GetOneTransactionController } from "@modules/transactions/useCases/getOneTransaction/GetOneTransactionController";
import { UpdateTransactionController } from "@modules/transactions/useCases/updateTransaction/UpdateTransactionController";
import { Router } from "express";

const transactionRoutes = Router();
const createTransactionController = new CreateTransactionController();
const updateTransactionController = new UpdateTransactionController();
const deleteTransactionController = new DeleteTransactionController();
const getAllTransactionsController = new GetAllTransactionsController();
const getOneTransactionController = new GetOneTransactionController();

transactionRoutes.get("/", getAllTransactionsController.handle);

transactionRoutes.get("/:id", getOneTransactionController.handle);

transactionRoutes.post("/", createTransactionController.handle);

transactionRoutes.put("/:id", updateTransactionController.handle);

transactionRoutes.delete("/:id", deleteTransactionController.handle);

export { transactionRoutes };
