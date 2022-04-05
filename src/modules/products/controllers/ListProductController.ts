import { Request, Response } from 'express';
import ListProductService from '../services/ListProductService';

class ListProductController {
  public async execute(_req: Request, res: Response): Promise<Response> {
    const ListProduct = new ListProductService();
    const product = await ListProduct.execute();

    return res.json(product);
  }
}

export default ListProductController;
