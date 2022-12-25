import { inject, injectable } from "tsyringe";

import { Transaction } from "../../entities/Transaction";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";

@injectable()
class GetOneTransactionService {
  constructor(
    @inject("TransactionRepository")
    private transactionRepository: ITransactionRepository
  ) {}

  async execute(id: number): Promise<Transaction | undefined> {
    const transaction = await this.transactionRepository.getOne(id);
    return transaction;
  }
}

export { GetOneTransactionService };
