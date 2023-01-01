import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetCategoryOptionsService } from "./GetCategoryOptionsService";

class GetCategoryOptionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getCategoryOptionsService = container.resolve(
      GetCategoryOptionsService
    );

    const types = await getCategoryOptionsService.execute();

    return response.status(200).json(types);
  }
}

export { GetCategoryOptionsController };
