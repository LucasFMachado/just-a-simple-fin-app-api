import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTypeService } from './CreateTypeService';

class CreateTypeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const createTypeService = container.resolve(CreateTypeService);

    const type = await createTypeService.execute({ title });

    return response.status(200).json(type);
  }
}

export { CreateTypeController };
