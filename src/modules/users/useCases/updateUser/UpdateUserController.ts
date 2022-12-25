import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserService } from "./UpdateUserService";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email } = request.body;

    const updateUserService = container.resolve(UpdateUserService);

    const user = await updateUserService.execute({
      id: +id,
      name,
      email,
    });

    return response.status(200).json(user);
  }
}

export { UpdateUserController };
