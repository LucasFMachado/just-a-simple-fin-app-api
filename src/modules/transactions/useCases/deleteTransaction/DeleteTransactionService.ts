import { inject, injectable } from "tsyringe";

import { Transaction } from "../../entities/Transaction";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";

@injectable()
class DeleteTransactionService {
  constructor(
    @inject("TransactionRepository")
    private transactionRepository: ITransactionRepository
  ) {}

  async execute(id: number): Promise<Transaction> {
    const transaction = await this.transactionRepository.delete(id);
    return transaction;
  }
}

export { DeleteTransactionService };
