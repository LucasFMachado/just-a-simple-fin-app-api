import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetOneUserService } from "./GetOneUserService";

class GetOneUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getOneUserService = container.resolve(GetOneUserService);

    const user = await getOneUserService.execute(+id);

    return response.status(200).json(user);
  }
}

export { GetOneUserController };
