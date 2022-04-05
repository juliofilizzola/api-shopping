import { Request, Response } from 'express';
import ShowProductService from '../services/ShowProductService';

class ShowProductController {
  public async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showProduct = new ShowProductService();
    const product = await showProduct.execute(id);

    return res.json(product);
  }
}

export default ShowProductController;
