import { container } from 'tsyringe';

import { ITypeRepository } from '@modules/types/repositories/ITypeRepository';
import { TypeRepository } from '@modules/types/repositories/TypeRepository';

container.registerSingleton<ITypeRepository>('TypeRepository', TypeRepository);
