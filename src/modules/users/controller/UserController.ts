import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';
import UpdateUserService from '../services/UpdateAvatarUserSerice';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userList = new ListUserService();
    const user = await userList.execute();
    return res.json(user);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const userService = new CreateUserService();
    const { name, email, password } = req.body;
    const user = await userService.execute({ name, email, password });
    return res.json(user);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const updateUser = new UpdateUserService();
    const { name, email } = req.body;
    const filename = req.file?.filename || '';
    const { id } = req.user;

    const user = await updateUser.execute({
      id,
      name,
      email,
      avatar: filename,
    });

    return res.json(user);
  }
}

export default UserController;
