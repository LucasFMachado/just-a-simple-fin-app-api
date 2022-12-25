import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteTransactionService } from "./DeleteTransactionService";

class DeleteTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTransactionService = container.resolve(
      DeleteTransactionService
    );

    const transaction = await deleteTransactionService.execute(+id);

    return response.status(200).json(transaction);
  }
}

export { DeleteTransactionController };
