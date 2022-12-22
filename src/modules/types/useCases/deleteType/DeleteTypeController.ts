import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteTypeService } from './DeleteTypeService';

class DeleteTypeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTypeService = container.resolve(DeleteTypeService);

    const type = await deleteTypeService.execute(+id);

    return response.status(200).json(type);
  }
}

export { DeleteTypeController };
