import { Response, Request } from 'express';
import SessionsServicies from '../services/SessionsService';

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const Sessions = new SessionsServicies();

    const { user, token } = await Sessions.execute({
      email,
      password,
    });

    const userReturn = {
      name: user.name,
      id: user.id,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return res.json({
      userReturn,
      token,
    });
  }
}
