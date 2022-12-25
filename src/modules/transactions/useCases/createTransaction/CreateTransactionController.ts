import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTransactionService } from "./CreateTransactionService";

class CreateTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, category_id, amount } = request.body;

    const createTransactionService = container.resolve(
      CreateTransactionService
    );

    const transaction = await createTransactionService.execute({
      title,
      category_id,
      amount,
    });

    return response.status(200).json(transaction);
  }
}

export { CreateTransactionController };
