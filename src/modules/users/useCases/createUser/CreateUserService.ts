import { inject, injectable } from "tsyringe";

import { ICreateUserDto } from "../../dtos/ICreateUserDto";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    email,
    password,
    password_confirm,
  }: ICreateUserDto): Promise<User> {
    const user = await this.userRepository.create({
      name,
      email,
      password,
      password_confirm,
    });
    return user;
  }
}

export { CreateUserService };
