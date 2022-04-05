import auth from '@config/auth';
import AppError from '@shared/errors/AppErros';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

class IsAuthenticated {
  async index(req: Request, _res: Response, next: NextFunction): Promise<void> {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new AppError('JWT TOKEN is missing.');
    }

    const [, token] = authorization.split(' ');
    console.log(token);

    const secret = process.env.SECRET_TOKEN || 'x';

    try {
      const decodeToken = verify(token, secret);
      if (decodeToken) {
        next();
      }
    } catch (error: any) {
      throw new AppError(error.messaging);
    }
  }
}

export default new IsAuthenticated();