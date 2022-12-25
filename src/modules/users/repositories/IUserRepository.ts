import { IAuthenticateUserDto } from "@modules/users/dtos/IAuthenticateUserDto";
import { IAuthenticateUserSuccessDto } from "@modules/users/dtos/IAuthenticateUserSuccessDto";

import { IChangePasswordDto } from "../dtos/IChangePasswordDto";
import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { IUpdateUserDto } from "../dtos/IUpdateUserDto";
import { User } from "../entities/User";

interface IUserRepository {
  getAll(): Promise<User[]>;
  getOne(id: number): Promise<User | undefined>;
  create(data: ICreateUserDto): Promise<User>;
  update(data: IUpdateUserDto): Promise<User>;
  delete(id: number): Promise<User>;
  authenticate(
    data: IAuthenticateUserDto
  ): Promise<IAuthenticateUserSuccessDto>;
  changePassword(data: IChangePasswordDto): Promise<User>;
  findById(id: number): Promise<User | undefined>;
}

export { IUserRepository };
