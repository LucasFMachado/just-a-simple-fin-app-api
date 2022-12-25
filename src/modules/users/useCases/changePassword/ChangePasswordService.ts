import { inject, injectable } from "tsyringe";

import { IChangePasswordDto } from "../../dtos/IChangePasswordDto";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class ChangePasswordService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    id,
    old_password,
    new_password,
    new_password_confirm,
  }: IChangePasswordDto): Promise<User> {
    const user = await this.userRepository.changePassword({
      id,
      old_password,
      new_password,
      new_password_confirm,
    });
    return user;
  }
}

export { ChangePasswordService };
