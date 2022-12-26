import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";
import { IPagedQueryReturn } from "@shared/interfaces/IPagedQueryReturn";
import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
class GetAllCategoriesService {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({
    page,
    take,
  }: IPagedQueryRequest): Promise<IPagedQueryReturn<Category>> {
    const categories = await this.categoryRepository.getAll({ page, take });
    return categories;
  }
}

export { GetAllCategoriesService };
