import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";

function errorsMananger(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: `${err.statusCode}`, message: err.message });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error: ${err.message}`,
  });
}

export { errorsMananger };
