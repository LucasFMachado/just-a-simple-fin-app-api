import { inject, injectable } from 'tsyringe';

import { IUpdateCategoryDto } from '../../dtos/IUpdateCategoryDto';
import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../../repositories/ICategoryRepository';

@injectable()
class UpdateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute({ id, title, type_id, active }: IUpdateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.update({ id, title, type_id, active });
    return category;
  }
}

export { UpdateCategoryService };
