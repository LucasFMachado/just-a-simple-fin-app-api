import { inject, injectable } from 'tsyringe';

import { Type } from '../../entities/Type';
import { ITypeRepository } from '../../repositories/ITypeRepository';

@injectable()
class DeleteTypeService {
  constructor(
    @inject('TypeRepository')
    private typeRepository: ITypeRepository,
  ) {}

  async execute(id: number): Promise<Type> {
    const type = await this.typeRepository.delete(id);
    return type;
  }
}

export { DeleteTypeService };
