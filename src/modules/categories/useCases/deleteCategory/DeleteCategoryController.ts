import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCategoryService } from './DeleteCategoryService';

class DeleteCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCategoryService = container.resolve(DeleteCategoryService);

    const category = await deleteCategoryService.execute(+id);

    return response.status(200).json(category);
  }
}

export { DeleteCategoryController };
