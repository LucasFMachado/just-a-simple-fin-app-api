import { container } from 'tsyringe';

import { ITypeRepository } from '@modules/types/repositories/ITypeRepository';
import { TypeRepository } from '@modules/types/repositories/TypeRepository';
import { ICategoryRepository } from '@modules/categories/repositories/ICategoryRepository';
import { CategoryRepository } from '@modules/categories/repositories/CategoryRepository';

container.registerSingleton<ITypeRepository>('TypeRepository', TypeRepository);

container.registerSingleton<ICategoryRepository>('CategoryRepository', CategoryRepository);
