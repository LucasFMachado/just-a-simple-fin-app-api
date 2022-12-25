import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCategoryService } from "./UpdateCategoryService";

class UpdateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, type_id, active } = request.body;

    const updateCategoryService = container.resolve(UpdateCategoryService);

    const category = await updateCategoryService.execute({
      id: +id,
      title,
      type_id,
      active,
    });

    return response.status(200).json(category);
  }
}

export { UpdateCategoryController };
