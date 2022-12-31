import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class GetMyUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(id: number): Promise<User | undefined> {
    const user = await this.userRepository.getOne(id);
    return user;
  }
}

export { GetMyUserService };
