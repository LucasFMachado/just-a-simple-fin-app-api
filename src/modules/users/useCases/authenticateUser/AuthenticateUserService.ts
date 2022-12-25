import { IAuthenticateUserDto } from "@modules/users/dtos/IAuthenticateUserDto";
import { IAuthenticateUserSuccessDto } from "@modules/users/dtos/IAuthenticateUserSuccessDto";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class AuthenticateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    email,
    password,
  }: IAuthenticateUserDto): Promise<IAuthenticateUserSuccessDto> {
    const authenticate = await this.userRepository.authenticate({
      email,
      password,
    });
    return authenticate;
  }
}

export { AuthenticateUserService };
