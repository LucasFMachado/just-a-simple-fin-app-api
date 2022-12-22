import { ICreateTypeDto } from '../dtos/ICreateTypeDto';
import { IUpdateTypeDto } from '../dtos/IUpdateTypeDto';
import { Type } from '../entities/Type';

interface ITypeRepository {
  create(data: ICreateTypeDto): Promise<Type>;
  update(data: IUpdateTypeDto): Promise<Type>;
  delete(id: number): Promise<Type>;
  getAll(): Promise<Type[]>;
  getOne(id: number): Promise<Type | undefined>;
}

export { ITypeRepository };
