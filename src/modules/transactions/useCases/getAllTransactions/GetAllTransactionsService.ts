import { inject, injectable } from "tsyringe";

import { Transaction } from "../../entities/Transaction";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";

@injectable()
class GetAllTransactionsService {
  constructor(
    @inject("TransactionRepository")
    private transactionRepository: ITransactionRepository
  ) {}

  async execute(): Promise<Transaction[]> {
    const transactions = await this.transactionRepository.getAll();
    return transactions;
  }
}

export { GetAllTransactionsService };
