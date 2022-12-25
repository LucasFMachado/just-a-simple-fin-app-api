import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
class DeleteCategoryService {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(id: number): Promise<Category> {
    const category = await this.categoryRepository.delete(id);
    return category;
  }
}

export { DeleteCategoryService };
