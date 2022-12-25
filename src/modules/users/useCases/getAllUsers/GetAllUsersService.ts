import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class GetAllUsersService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.getAll();
    return users;
  }
}

export { GetAllUsersService };
