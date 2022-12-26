import { IPagedQueryReturn } from "@shared/interfaces/IPagedQueryReturn";
import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";

import { ICreateTypeDto } from "../dtos/ICreateTypeDto";
import { IUpdateTypeDto } from "../dtos/IUpdateTypeDto";
import { Type } from "../entities/Type";

interface ITypeRepository {
  create(data: ICreateTypeDto): Promise<Type>;
  update(data: IUpdateTypeDto): Promise<Type>;
  delete(id: number): Promise<Type>;
  getAll(data: IPagedQueryRequest): Promise<IPagedQueryReturn<Type>>;
  getOne(id: number): Promise<Type | undefined>;
}

export { ITypeRepository };
