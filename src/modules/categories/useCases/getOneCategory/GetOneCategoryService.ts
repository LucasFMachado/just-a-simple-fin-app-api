import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
class GetOneCategoryService {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(id: number): Promise<Category | undefined> {
    const category = await this.categoryRepository.getOne(id);
    return category;
  }
}

export { GetOneCategoryService };
