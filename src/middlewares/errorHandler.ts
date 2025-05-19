import { Request, Response } from 'express';
import { AppError } from '../errors/AppError';
import logger from '../utils/logger';

export function errorHandler(
  err: Error | AppError,
  req: Request,
  res: Response
) {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message =
    err instanceof AppError ? err.message : 'Internal Server Error';

  logger.error(`[${req.method}] ${req.url} - ${message}`);

  res.status(statusCode).json({
    success: false,
    message,
  });
}
