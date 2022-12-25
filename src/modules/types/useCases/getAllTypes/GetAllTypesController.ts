import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllTypesService } from "./GetAllTypesService";

class GetAllTypesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllTypesService = container.resolve(GetAllTypesService);

    const types = await getAllTypesService.execute();

    return response.status(200).json(types);
  }
}

export { GetAllTypesController };
