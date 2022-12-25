import { inject, injectable } from "tsyringe";

import { IUpdateUserDto } from "../../dtos/IUpdateUserDto";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class UpdateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ id, name, email }: IUpdateUserDto): Promise<User> {
    const user = await this.userRepository.update({
      id,
      name,
      email,
    });
    return user;
  }
}

export { UpdateUserService };
