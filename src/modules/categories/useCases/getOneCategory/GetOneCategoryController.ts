import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetOneCategoryService } from "./GetOneCategoryService";

class GetOneCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getOneCategoryService = container.resolve(GetOneCategoryService);

    const category = await getOneCategoryService.execute(+id);

    return response.status(200).json(category);
  }
}

export { GetOneCategoryController };
