import { inject, injectable } from 'tsyringe';

import { ICreateTypeDto } from '../../dtos/ICreateTypeDto';
import { Type } from '../../entities/Type';
import { ITypeRepository } from '../../repositories/ITypeRepository';

@injectable()
class CreateTypeService {
  constructor(
    @inject('TypeRepository')
    private typeRepository: ITypeRepository,
  ) {}

  async execute({ title }: ICreateTypeDto): Promise<Type> {
    const type = await this.typeRepository.create({ title });
    return type;
  }
}

export { CreateTypeService };
