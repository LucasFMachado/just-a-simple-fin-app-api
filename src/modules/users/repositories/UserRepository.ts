import { AppError } from "@shared/errors/AppError";
import {
  alreadyExistsMessage,
  authErrorMessage,
  notExistsMessage,
  notMatchMessage,
} from "@shared/messages";
import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";
import { IPagedQueryReturn } from "@shared/interfaces/IPagedQueryReturn";
import { hashPassword } from "@utils/password";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getRepository, Not, Repository } from "typeorm";

import { IAuthenticateUserDto } from "../dtos/IAuthenticateUserDto";
import { IAuthenticateUserSuccessDto } from "../dtos/IAuthenticateUserSuccessDto";
import { IChangePasswordDto } from "../dtos/IChangePasswordDto";
import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { IUpdateUserDto } from "../dtos/IUpdateUserDto";
import { User } from "../entities/User";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async getAll({
    page,
    take,
  }: IPagedQueryRequest): Promise<IPagedQueryReturn<User>> {
    const [users, count] = await this.repository.findAndCount({
      where: { delete: false },
      take: take,
      skip: page * take,
    });

    return {
      list: users,
      count,
    };
  }

  async getOne(id: number): Promise<User | undefined> {
    const user = await this.findById(id);

    if (!user) {
      throw new AppError(notExistsMessage("User"));
    }

    return user;
  }

  async create({ name, email, password }: ICreateUserDto): Promise<User> {
    const userAlreadyExists = await this.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError(alreadyExistsMessage("User"));
    }

    const password_hash = await hashPassword(password);

    const user = this.repository.create({
      name,
      email,
      password: password_hash,
    });

    await this.repository.save(user);

    return user;
  }

  async update({ id, name, email }: IUpdateUserDto): Promise<User> {
    const user = await this.findById(id);

    if (!user) {
      throw new AppError(notExistsMessage("User"));
    }

    const user_already_exists = await this.findByExisting(id, email);

    if (user_already_exists) {
      throw new AppError(alreadyExistsMessage("User"));
    }

    const updated_user = this.repository.create({
      ...user,
      id,
      name,
      email,
    });

    await this.repository.save(updated_user);

    return updated_user;
  }

  async delete(id: number): Promise<User> {
    const user = await this.findById(id);

    if (!user) {
      throw new AppError(notExistsMessage("User"));
    }

    const deleted_user = this.repository.create({
      ...user,
      delete: true,
    });

    await this.repository.save(deleted_user);

    return deleted_user;
  }

  async authenticate({
    email,
    password,
  }: IAuthenticateUserDto): Promise<IAuthenticateUserSuccessDto> {
    const user = await this.findByEmail(email);

    if (!user) {
      throw new AppError(authErrorMessage());
    }

    const password_match = await compare(password, user.password);

    if (!password_match) {
      throw new AppError(authErrorMessage());
    }

    const token = sign({}, "2025f8da49d9908e4ac2156a0d705eaa", {
      subject: user.id.toString(),
      expiresIn: "30d",
    });

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };
  }

  async changePassword({
    id,
    old_password,
    new_password,
  }: IChangePasswordDto): Promise<User> {
    const user = await this.findById(id);

    if (!user) {
      throw new AppError(notExistsMessage("User"));
    }

    const password_match = await compare(old_password, user.password);

    if (!password_match) {
      throw new AppError(notMatchMessage("Old password"));
    }

    const password_hash = await hashPassword(new_password);

    const updated_user = this.repository.create({
      ...user,
      password: password_hash,
    });

    await this.repository.save(updated_user);

    return updated_user;
  }

  async findById(id: number): Promise<User | undefined> {
    const user = await this.repository.findOne(id);
    return user;
  }

  /*
  // Private methods
  */

  private async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  private async findByExisting(
    id: number,
    email: string
  ): Promise<User | undefined> {
    const user = await this.repository.findOne({
      id: Not(id),
      email,
      delete: false,
    });

    return user;
  }
}

export { UserRepository };
