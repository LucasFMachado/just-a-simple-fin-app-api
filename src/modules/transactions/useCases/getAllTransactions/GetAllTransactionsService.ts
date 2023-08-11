import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";
import { IPagedQueryReturn } from "@shared/interfaces/IPagedQueryReturn";
import { inject, injectable } from "tsyringe";

import { Transaction } from "../../entities/Transaction";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";

@injectable()
class GetAllTransactionsService {
  constructor(
    @inject("TransactionRepository")
    private transactionRepository: ITransactionRepository
  ) {}

  async execute({
    page,
    take,
  }: IPagedQueryRequest): Promise<IPagedQueryReturn<Transaction>> {
    const transactions = await this.transactionRepository.getAll({
      page: page - 1,
      take,
    });
    return transactions;
  }
}

export { GetAllTransactionsService };
