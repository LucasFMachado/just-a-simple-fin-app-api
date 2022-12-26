import { AppError } from "@shared/errors/AppError";
import { alreadyExistsMessage, notExistsMessage } from "@shared/messages";
import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";
import { IPagedQueryReturn } from "@shared/interfaces/IPagedQueryReturn";
import { getRepository, Repository } from "typeorm";

import { ICreateTransactionDto } from "../dtos/ICreateTransactionDto";
import { IUpdateTransactionDto } from "../dtos/IUpdateTransactionDto";
import { Transaction } from "../entities/Transaction";
import { ITransactionRepository } from "./ITransactionRepository";

class TransactionRepository implements ITransactionRepository {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = getRepository(Transaction);
  }

  async create({
    title,
    category_id,
    amount,
  }: ICreateTransactionDto): Promise<Transaction> {
    const transaction_already_exists = await this.findByTitle(title);

    if (transaction_already_exists) {
      throw new AppError(alreadyExistsMessage("Transaction"));
    }

    const transaction = this.repository.create({ title, category_id, amount });

    await this.repository.save(transaction);

    return transaction;
  }

  async update({
    id,
    title,
    category_id,
    amount,
  }: IUpdateTransactionDto): Promise<Transaction> {
    const transaction = await this.findById(id);

    if (!transaction) {
      throw new AppError(notExistsMessage("Transaction"));
    }

    const updated_transaction = this.repository.create({
      ...transaction,
      id,
      title,
      category_id,
      amount,
    });

    await this.repository.save(updated_transaction);

    return updated_transaction;
  }

  async delete(id: number): Promise<Transaction> {
    const transaction = await this.findById(id);

    if (!transaction) {
      throw new AppError(notExistsMessage("Transaction"));
    }

    const deleted_transaction = this.repository.create({
      ...transaction,
      delete: true,
    });

    await this.repository.save(deleted_transaction);

    return deleted_transaction;
  }

  async getAll({
    page,
    take,
  }: IPagedQueryRequest): Promise<IPagedQueryReturn<Transaction>> {
    const [transactions, count] = await this.repository.findAndCount({
      where: { delete: false },
      take: take,
      skip: page * take,
    });

    return {
      list: transactions,
      count,
    };
  }

  async getOne(id: number): Promise<Transaction | undefined> {
    const transaction = await this.findById(id);

    if (!transaction) {
      throw new AppError(notExistsMessage("Transaction"));
    }

    return transaction;
  }

  /*
  // Private methods
  */

  private async findById(id: number): Promise<Transaction | undefined> {
    const transaction = await this.repository.findOne(id);
    return transaction;
  }

  private async findByTitle(title: string): Promise<Transaction | undefined> {
    const transaction = await this.repository.findOne({ title });
    return transaction;
  }
}

export { TransactionRepository };
