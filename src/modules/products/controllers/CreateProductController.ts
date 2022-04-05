import CreateProductService from '../services/CreateProductService';
import { Request, Response } from 'express';

class CreateProductController {
  public async execute(req: Request, res: Response): Promise<Response> {
    const { name, quantity, price } = req.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      quantity,
      price,
    });

    return res.json(product);
  }
}

export default CreateProductController;
