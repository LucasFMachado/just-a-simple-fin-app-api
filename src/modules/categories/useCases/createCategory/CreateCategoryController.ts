import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryService } from "./CreateCategoryService";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, type_id } = request.body;

    const createCategoryService = container.resolve(CreateCategoryService);

    const category = await createCategoryService.execute({ title, type_id });

    return response.status(200).json(category);
  }
}

export { CreateCategoryController };
