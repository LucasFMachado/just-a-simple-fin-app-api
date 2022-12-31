import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetMyUserService } from "./GetMyUserService";

class GetMyUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      user: { id },
    } = request;

    const getMyUserService = container.resolve(GetMyUserService);

    const user = await getMyUserService.execute(+id);

    return response.status(200).json(user);
  }
}

export { GetMyUserController };
