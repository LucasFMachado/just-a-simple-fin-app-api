import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTypeService } from './UpdateTypeService';

class UpdateTypeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, active } = request.body;

    const updateTypeService = container.resolve(UpdateTypeService);

    const type = await updateTypeService.execute({
      id: +id,
      title,
      active,
    });

    return response.status(200).json(type);
  }
}

export { UpdateTypeController };
