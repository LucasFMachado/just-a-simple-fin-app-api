import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllUsersService } from "./GetAllUsersService";

class GetAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page, take } = request.query;

    const getAllUsersService = container.resolve(GetAllUsersService);

    const users = await getAllUsersService.execute({
      page: Number(page) || 1,
      take: Number(take) || 10,
    });

    return response.status(200).json(users);
  }
}

export { GetAllUsersController };
