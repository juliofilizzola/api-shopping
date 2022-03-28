import { Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function api(_req: Request, res: Response) {
  return res.json({ message: 'Hello Dev!!!!!!' });
}

export default api;
