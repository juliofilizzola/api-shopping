import AppError from '../../errors/AppErros';
import { NextFunction, Request, Response } from "express";

function errorAPP(error:Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  } else if (!(error instanceof AppError)) {
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }

  next();
}

export default errorAPP;

