import AppError from '@shared/errors/AppErros';
import { NextFunction, Request, Response } from 'express';

function errorAPP(
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
): Response<any, Record<string, any>> | undefined {
  const errorStatus = 500;
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  } else if (!(error instanceof AppError)) {
    return res.status(errorStatus).json({
      status: 'error',
      message: 'Internal server error',
    });
  }

  next();
}

export default errorAPP;
