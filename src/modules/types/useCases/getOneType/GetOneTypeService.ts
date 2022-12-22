import { inject, injectable } from 'tsyringe';

import { Type } from '../../entities/Type';
import { ITypeRepository } from '../../repositories/ITypeRepository';

@injectable()
class GetOneTypeService {
  constructor(
    @inject('TypeRepository')
    private typeRepository: ITypeRepository,
  ) {}

  async execute(id: number): Promise<Type | undefined> {
    const type = await this.typeRepository.getOne(id);
    return type;
  }
}

export { GetOneTypeService };
