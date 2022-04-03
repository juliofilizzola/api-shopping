import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';
import UpdateUserService from '../services/UpdateUserSerice';

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

export default UserController;
