import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllTypesService } from "./GetAllTypesService";

class GetAllTypesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page, take } = request.query;

    const getAllTypesService = container.resolve(GetAllTypesService);

    const types = await getAllTypesService.execute({
      page: Number(page) || 0,
      take: Number(take) || 10,
    });

    return response.status(200).json(types);
  }
}

export { GetAllTypesController };
