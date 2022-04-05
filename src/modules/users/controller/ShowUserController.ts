import { Request, Response } from 'express';
import ListUserService from '../services/ListUserService';

class ShowUserController {
  public async execute(req: Request, res: Response): Promise<Response> {
    const userList = new ListUserService();
    const user = await userList.execute();
    return res.json(user);
  }
}

export default ShowUserController;
