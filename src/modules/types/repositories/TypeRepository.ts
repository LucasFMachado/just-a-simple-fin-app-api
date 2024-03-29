import { AppError } from "@shared/errors/AppError";
import { IOptionQueryReturn } from "@shared/interfaces/IOptionQueryReturn";
import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";
import { alreadyExistsMessage, notExistsMessage } from "@shared/messages";
import { getRepository, Not, Repository } from "typeorm";

import { IPagedQueryReturn } from "../../../shared/interfaces/IPagedQueryReturn";
import { ICreateTypeDto } from "../dtos/ICreateTypeDto";
import { IUpdateTypeDto } from "../dtos/IUpdateTypeDto";
import { Type } from "../entities/Type";
import { ITypeRepository } from "./ITypeRepository";

class TypeRepository implements ITypeRepository {
  private repository: Repository<Type>;

  constructor() {
    this.repository = getRepository(Type);
  }

  async create({ title }: ICreateTypeDto): Promise<Type> {
    const type_already_exists = await this.findByTitle(title);

    if (type_already_exists) {
      throw new AppError(alreadyExistsMessage("Type"));
    }

    const type = this.repository.create({ title });

    await this.repository.save(type);

    return type;
  }

  async update({ id, title, active }: IUpdateTypeDto): Promise<Type> {
    const type = await this.findById(id);

    if (!type) {
      throw new AppError(notExistsMessage("Type"));
    }

    const type_already_exists = await this.findByExisting(id, title);

    if (type_already_exists) {
      throw new AppError(alreadyExistsMessage("Type"));
    }

    const updated_type = this.repository.create({
      ...type,
      id,
      title,
      active,
    });

    await this.repository.save(updated_type);

    return updated_type;
  }

  async delete(id: number): Promise<Type> {
    const type = await this.findById(id);

    if (!type) {
      throw new AppError(notExistsMessage("Type"));
    }

    const deleted_type = this.repository.create({
      ...type,
      delete: true,
    });

    await this.repository.save(deleted_type);

    return deleted_type;
  }

  async getAll({
    page,
    take,
  }: IPagedQueryRequest): Promise<IPagedQueryReturn<Type>> {
    const [types, count] = await this.repository.findAndCount({
      where: { delete: false },
      take: take,
      skip: page * take,
    });

    return {
      list: types,
      count,
    };
  }

  async getOne(id: number): Promise<Type | undefined> {
    const type = await this.findById(id);

    if (!type) {
      throw new AppError(notExistsMessage("Type"));
    }

    return type;
  }

  async getOptions(): Promise<IOptionQueryReturn[]> {
    const types = await this.repository.find({
      where: { delete: false, active: true },
      select: ["id", "title"],
    });

    const options = types.map((option) => ({
      value: String(option.id),
      label: option.title,
    }));

    return options;
  }

  /*
  // Private methods
  */

  private async findById(id: number): Promise<Type | undefined> {
    const type = await this.repository.findOne({ id, delete: false });
    return type;
  }

  private async findByTitle(title: string): Promise<Type | undefined> {
    const type = await this.repository.findOne({ title, delete: false });
    return type;
  }

  private async findByExisting(
    id: number,
    title: string
  ): Promise<Type | undefined> {
    const type = await this.repository.findOne({
      id: Not(id),
      title,
      delete: false,
    });

    return type;
  }
}

export { TypeRepository };
