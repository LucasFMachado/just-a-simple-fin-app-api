import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTransactionService } from "./UpdateTransactionService";

class UpdateTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, category_id, amount } = request.body;

    const updateTransactionService = container.resolve(
      UpdateTransactionService
    );

    const transaction = await updateTransactionService.execute({
      id: +id,
      title,
      category_id,
      amount,
    });

    return response.status(200).json(transaction);
  }
}

export { UpdateTransactionController };
