import { IOptionQueryReturn } from "@shared/interfaces/IOptionQueryReturn";
import { inject, injectable } from "tsyringe";

import { ITypeRepository } from "../../repositories/ITypeRepository";

@injectable()
class GetTypeOptionsService {
  constructor(
    @inject("TypeRepository")
    private typeRepository: ITypeRepository
  ) {}

  async execute(): Promise<IOptionQueryReturn[]> {
    const types = await this.typeRepository.getOptions();
    return types;
  }
}

export { GetTypeOptionsService };
