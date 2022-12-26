import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllCategoriesService } from "./GetAllCategoriesService";

class GetAllCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page, take } = request.query;

    const getAllCategoriesService = container.resolve(GetAllCategoriesService);

    const categories = await getAllCategoriesService.execute({
      page: Number(page) || 0,
      take: Number(take) || 10,
    });

    return response.status(200).json(categories);
  }
}

export { GetAllCategoriesController };
