import AppError from "@shared/errors/AppErros";
import { NextFunction, Request, response, Response } from "express";

function errorAPP(error:Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
}

export default errorAPP;

