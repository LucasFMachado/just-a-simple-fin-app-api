import { IPagedQueryReturn } from "@shared/interfaces/IPagedQueryReturn";
import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";
import { inject, injectable } from "tsyringe";

import { Type } from "../../entities/Type";
import { ITypeRepository } from "../../repositories/ITypeRepository";

@injectable()
class GetAllTypesService {
  constructor(
    @inject("TypeRepository")
    private typeRepository: ITypeRepository
  ) {}

  async execute({
    page,
    take,
  }: IPagedQueryRequest): Promise<IPagedQueryReturn<Type>> {
    const types = await this.typeRepository.getAll({ page, take });
    return types;
  }
}

export { GetAllTypesService };
