import { Request, Response } from 'express';
import UpdateUserService from '../services/UpdateUserService';

class UpdateUserController {
  public async execute(req: Request, res: Response): Promise<Response> {
    const userService = new UpdateUserService();
    const { name, email } = req.body;
    const { id } = req.params;

    const user = await userService.execute({
      id,
      name,
      email,
    });

    return res.json(user);
  }
}

export default UpdateUserController;
