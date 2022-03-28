import { Request, Response } from 'express';

function api(req: Request, res: Response) {
  return res.json({ message: 'Hello Dev!!!!!!' });
}

export default api;
