import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";
import { IPagedQueryReturn } from "@shared/interfaces/IPagedQueryReturn";

import { ICreateTransactionDto } from "../dtos/ICreateTransactionDto";
import { IUpdateTransactionDto } from "../dtos/IUpdateTransactionDto";
import { Transaction } from "../entities/Transaction";

interface ITransactionRepository {
  create(data: ICreateTransactionDto): Promise<Transaction>;
  update(data: IUpdateTransactionDto): Promise<Transaction>;
  delete(id: number): Promise<Transaction>;
  getAll(data: IPagedQueryRequest): Promise<IPagedQueryReturn<Transaction>>;
  getOne(id: number): Promise<Transaction | undefined>;
}

export { ITransactionRepository };
