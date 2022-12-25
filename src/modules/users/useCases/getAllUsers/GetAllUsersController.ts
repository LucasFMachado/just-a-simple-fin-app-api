import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllUsersService } from "./GetAllUsersService";

class GetAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllUsersService = container.resolve(GetAllUsersService);

    const users = await getAllUsersService.execute();

    return response.status(200).json(users);
  }
}

export { GetAllUsersController };
