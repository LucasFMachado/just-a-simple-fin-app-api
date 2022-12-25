import { inject, injectable } from "tsyringe";

import { IUpdateTransactionDto } from "../../dtos/IUpdateTransactionDto";
import { Transaction } from "../../entities/Transaction";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";

@injectable()
class UpdateTransactionService {
  constructor(
    @inject("TransactionRepository")
    private transactionRepository: ITransactionRepository
  ) {}

  async execute({
    id,
    title,
    category_id,
    amount,
  }: IUpdateTransactionDto): Promise<Transaction> {
    const transaction = await this.transactionRepository.update({
      id,
      title,
      category_id,
      amount,
    });
    return transaction;
  }
}

export { UpdateTransactionService };
