import { inject, injectable } from "tsyringe";

import { ICreateTransactionDto } from "../../dtos/ICreateTransactionDto";
import { Transaction } from "../../entities/Transaction";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";

@injectable()
class CreateTransactionService {
  constructor(
    @inject("TransactionRepository")
    private transactionRepository: ITransactionRepository
  ) {}

  async execute({
    title,
    category_id,
    amount,
  }: ICreateTransactionDto): Promise<Transaction> {
    const transaction = await this.transactionRepository.create({
      title,
      category_id,
      amount,
    });
    return transaction;
  }
}

export { CreateTransactionService };
