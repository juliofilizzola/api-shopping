import { Request, Response } from 'express';
import UpdateUserService from '../services/UpdateAvatarUserSerice';

class UpdateUserController {
  public async update(req: Request, res: Response): Promise<Response> {
    const userService = new UpdateUserService();
    const { name, email, password, avatar } = req.body;
    const { id } = req.params;

    const user = await userService.execute({
      id,
      name,
      email,
      password,
      avatar,
    });

    return res.json(user);
  }
}

export default UpdateUserController;
