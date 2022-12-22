import { inject, injectable } from 'tsyringe';

import { Type } from '../../entities/Type';
import { ITypeRepository } from '../../repositories/ITypeRepository';

@injectable()
class GetAllTypesService {
  constructor(
    @inject('TypeRepository')
    private typeRepository: ITypeRepository,
  ) {}

  async execute(): Promise<Type[]> {
    const types = await this.typeRepository.getAll();
    return types;
  }
}

export { GetAllTypesService };
