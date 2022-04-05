import { Request, Response } from 'express';
import UpdateAvatarUserService from '../services/UpdateAvatarUserSerice';

class UpdateAvatarUserController {
  public async execute(req: Request, res: Response): Promise<Response> {
    const userService = new UpdateAvatarUserService();
    const filename = req.file?.filename || '';
    const { id } = req.params;

    const user = await userService.execute({
      id,
      avatar: filename,
    });

    return res.json(user);
  }
}

export default UpdateAvatarUserController;
