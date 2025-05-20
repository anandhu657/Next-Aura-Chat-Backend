// notFound.ts
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

export const notFound = (req: Request, _res: Response, next: NextFunction) => {
  next(new AppError(`Route ${req.originalUrl} not found`, 404));
};
