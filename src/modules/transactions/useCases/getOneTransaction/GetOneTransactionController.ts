import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetOneTransactionService } from "./GetOneTransactionService";

class GetOneTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getOneTransactionService = container.resolve(
      GetOneTransactionService
    );

    const transaction = await getOneTransactionService.execute(+id);

    return response.status(200).json(transaction);
  }
}

export { GetOneTransactionController };
