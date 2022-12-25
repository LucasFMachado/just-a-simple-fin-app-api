import { NextFunction, Request, Response } from "express";
import { AnyObjectSchema } from "yup";

import { AppError } from "../errors/AppError";

export const validateFields = (schema: AnyObjectSchema) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { body, query, params } = request;
    try {
      await schema.validate({
        body,
        query,
        params,
      });
      next();
    } catch ({ message }: unknown) {
      throw new AppError(message as string);
    }
  };
};
