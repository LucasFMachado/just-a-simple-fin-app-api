import { IOptionQueryReturn } from "@shared/interfaces/IOptionQueryReturn";
import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
class GetCategoryOptionsService {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(): Promise<IOptionQueryReturn[]> {
    const categories = await this.categoryRepository.getOptions();
    return categories;
  }
}

export { GetCategoryOptionsService };
