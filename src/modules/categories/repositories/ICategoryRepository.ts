import { IPagedQueryRequest } from "@shared/interfaces/IPagedQueryRequest";
import { IPagedQueryReturn } from "@shared/interfaces/IPagedQueryReturn";

import { ICreateCategoryDto } from "../dtos/ICreateCategoryDto";
import { IUpdateCategoryDto } from "../dtos/IUpdateCategoryDto";
import { Category } from "../entities/Category";

interface ICategoryRepository {
  create(data: ICreateCategoryDto): Promise<Category>;
  update(data: IUpdateCategoryDto): Promise<Category>;
  delete(id: number): Promise<Category>;
  getAll(data: IPagedQueryRequest): Promise<IPagedQueryReturn<Category>>;
  getOne(id: number): Promise<Category | undefined>;
}

export { ICategoryRepository };
