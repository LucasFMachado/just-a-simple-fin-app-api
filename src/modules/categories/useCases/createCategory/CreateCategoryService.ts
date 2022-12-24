import { inject, injectable } from 'tsyringe';

import { ICreateCategoryDto } from '../../dtos/ICreateCategoryDto';
import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../../repositories/ICategoryRepository';

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute({ title, type_id }: ICreateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.create({ title, type_id });
    return category;
  }
}

export { CreateCategoryService };
