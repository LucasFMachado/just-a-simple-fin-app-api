import 'reflect-metadata';
import 'express-async-errors';
import './shared/containers';

import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';

import createConnection from '@shared/database';
import { AppError } from '@shared/errors/AppError';
import { routes } from '@shared/routes';

createConnection();
const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response
        .status(err.statusCode)
        .json({ status: `${err.statusCode}`, message: err.message });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error: ${err.message}`,
    });
  },
);

app.listen(3333, () => console.log('Server is running!'));
