import { AppError } from "@shared/errors/AppError";
import { IOptionQueryReturn } from "@shared/interfaces/IOptionQueryReturn";
import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";
import { IPagedQueryReturn } from "@shared/interfaces/IPagedQueryReturn";
import { alreadyExistsMessage, notExistsMessage } from "@shared/messages";
import { getRepository, Not, Repository } from "typeorm";

import { ICreateCategoryDto } from "../dtos/ICreateCategoryDto";
import { IUpdateCategoryDto } from "../dtos/IUpdateCategoryDto";
import { Category } from "../entities/Category";
import { ICategoryRepository } from "./ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ title, type_id }: ICreateCategoryDto): Promise<Category> {
    const category_already_exists = await this.findByTitle(title);

    if (category_already_exists) {
      throw new AppError(alreadyExistsMessage("Category"));
    }

    const category = this.repository.create({ title, type_id });

    await this.repository.save(category);

    return category;
  }

  async update({
    id,
    title,
    type_id,
    active,
  }: IUpdateCategoryDto): Promise<Category> {
    const category = await this.findById(id);

    if (!category) {
      throw new AppError(notExistsMessage("Category"));
    }

    const category_already_exists = await this.findByExisting(id, title);

    if (category_already_exists) {
      throw new AppError(alreadyExistsMessage("Category"));
    }

    const updated_category = this.repository.create({
      ...category,
      id,
      title,
      type_id,
      active,
    });

    await this.repository.save(updated_category);

    return updated_category;
  }

  async delete(id: number): Promise<Category> {
    const category = await this.findById(id);

    if (!category) {
      throw new AppError(notExistsMessage("Category"));
    }

    const deleted_category = this.repository.create({
      ...category,
      delete: true,
    });

    await this.repository.save(deleted_category);

    return deleted_category;
  }

  async getAll({
    page,
    take,
  }: IPagedQueryRequest): Promise<IPagedQueryReturn<Category>> {
    const [categories, count] = await this.repository.findAndCount({
      where: { delete: false },
      relations: ["type"],
      take: take,
      skip: page * take,
    });

    return {
      list: categories,
      count,
    };
  }

  async getOne(id: number): Promise<Category | undefined> {
    const category = await this.findById(id);

    if (!category) {
      throw new AppError(notExistsMessage("Category"));
    }

    return category;
  }

  async getOptions(): Promise<IOptionQueryReturn[]> {
    const categories = await this.repository.find({
      where: { delete: false, active: true },
      select: ["id", "title"],
    });

    const options = categories.map((option) => ({
      value: String(option.id),
      label: option.title,
    }));

    return options;
  }

  /*
  // Private methods
  */

  private async findById(id: number): Promise<Category | undefined> {
    const category = await this.repository.findOne({
      where: { id, delete: false },
      relations: ["type"],
    });
    return category;
  }

  private async findByTitle(title: string): Promise<Category | undefined> {
    const category = await this.repository.findOne({ title, delete: false });
    return category;
  }

  private async findByExisting(
    id: number,
    title: string
  ): Promise<Category | undefined> {
    const category = await this.repository.findOne({
      id: Not(id),
      title,
      delete: false,
    });

    return category;
  }
}

export { CategoryRepository };
