import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";
import { IPagedQueryReturn } from "@shared/interfaces/IPagedQueryReturn";
import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class GetAllUsersService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    page,
    take,
  }: IPagedQueryRequest): Promise<IPagedQueryReturn<User>> {
    const users = await this.userRepository.getAll({ page: page - 1, take });
    return users;
  }
}

export { GetAllUsersService };
