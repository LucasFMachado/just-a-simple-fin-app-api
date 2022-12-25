import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, password_confirm } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      email,
      password,
      password_confirm,
    });

    return response.status(200).json(user);
  }
}

export { CreateUserController };
