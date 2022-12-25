import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class DeleteUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(id: number): Promise<User> {
    const user = await this.userRepository.delete(id);
    return user;
  }
}

export { DeleteUserService };
