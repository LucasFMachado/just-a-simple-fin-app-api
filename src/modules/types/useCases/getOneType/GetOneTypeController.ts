import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetOneTypeService } from "./GetOneTypeService";

class GetOneTypeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getOneTypeService = container.resolve(GetOneTypeService);

    const type = await getOneTypeService.execute(+id);

    return response.status(200).json(type);
  }
}

export { GetOneTypeController };
