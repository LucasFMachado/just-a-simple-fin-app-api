import { CategoryRepository } from "@modules/categories/repositories/CategoryRepository";
import { ICategoryRepository } from "@modules/categories/repositories/ICategoryRepository";
import { ITransactionRepository } from "@modules/transactions/repositories/ITransactionRepository";
import { TransactionRepository } from "@modules/transactions/repositories/TransactionRepository";
import { ITypeRepository } from "@modules/types/repositories/ITypeRepository";
import { TypeRepository } from "@modules/types/repositories/TypeRepository";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { UserRepository } from "@modules/users/repositories/UserRepository";
import { container } from "tsyringe";

container.registerSingleton<ITypeRepository>("TypeRepository", TypeRepository);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<ITransactionRepository>(
  "TransactionRepository",
  TransactionRepository
);
