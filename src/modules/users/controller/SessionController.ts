import { Response, Request } from 'express';
import CreateSessionsServicies from '../services/CreateSessionsService';

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const createSessions = new CreateSessionsServicies();

    const { user, token } = await createSessions.execute({
      email,
      password,
    });

    return res.json({
      user,
      token,
    });
  }
}
