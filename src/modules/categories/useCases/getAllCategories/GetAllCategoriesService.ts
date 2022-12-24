import { inject, injectable } from 'tsyringe';

import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../../repositories/ICategoryRepository';

@injectable()
class GetAllCategoriesService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.getAll();
    return categories;
  }
}

export { GetAllCategoriesService };
