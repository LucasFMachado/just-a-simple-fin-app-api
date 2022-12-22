import { inject, injectable } from 'tsyringe';

import { IUpdateTypeDto } from '../../dtos/IUpdateTypeDto';
import { Type } from '../../entities/Type';
import { ITypeRepository } from '../../repositories/ITypeRepository';

@injectable()
class UpdateTypeService {
  constructor(
    @inject('TypeRepository')
    private typeRepository: ITypeRepository,
  ) {}

  async execute({ id, title, active }: IUpdateTypeDto): Promise<Type> {
    const type = await this.typeRepository.update({ id, title, active });
    return type;
  }
}

export { UpdateTypeService };
