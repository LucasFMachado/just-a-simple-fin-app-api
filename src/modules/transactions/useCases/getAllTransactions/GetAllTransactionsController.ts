import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllTransactionsService } from "./GetAllTransactionsService";

class GetAllTransactionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page, take } = request.query;

    const getAllTransactionsService = container.resolve(
      GetAllTransactionsService
    );

    const transactions = await getAllTransactionsService.execute({
      page: Number(page) || 0,
      take: Number(take) || 10,
    });

    return response.status(200).json(transactions);
  }
}

export { GetAllTransactionsController };
