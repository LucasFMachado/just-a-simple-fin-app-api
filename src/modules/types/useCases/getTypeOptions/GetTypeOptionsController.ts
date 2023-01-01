import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetTypeOptionsService } from "./GetTypeOptionsService";

class GetTypeOptionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getTypeOptionsService = container.resolve(GetTypeOptionsService);

    const types = await getTypeOptionsService.execute();

    return response.status(200).json(types);
  }
}

export { GetTypeOptionsController };
