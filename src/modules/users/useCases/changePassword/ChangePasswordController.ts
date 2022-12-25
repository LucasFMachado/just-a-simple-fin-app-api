import { Request, Response } from "express";
import { container } from "tsyringe";

import { ChangePasswordService } from "./ChangePasswordService";

class ChangePasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { old_password, new_password, new_password_confirm } = request.body;

    const changePasswordService = container.resolve(ChangePasswordService);

    const user = await changePasswordService.execute({
      id: +id,
      old_password,
      new_password,
      new_password_confirm,
    });

    return response.status(200).json(user);
  }
}

export { ChangePasswordController };
