import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

class CreateUserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const userService = new CreateUserService();
    const { name, email, password } = req.body;
    const user = await userService.execute({ name, email, password });
    return res.json(user);
  }
}

export default CreateUserController;
