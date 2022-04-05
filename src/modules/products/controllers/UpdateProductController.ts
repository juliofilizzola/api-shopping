import { Request, Response } from 'express';
import UpdateProductService from '../services/UpdateProductService';

class UpdateProductCrontoller {
  public async execute(req: Request, res: Response): Promise<Response> {
    const { name, quantity, price } = req.body;
    const { id } = req.params;

    const updateProduct = new UpdateProductService();

    const product = await updateProduct.execute({
      id,
      name,
      quantity,
      price,
    });

    return res.json(product);
  }
}

export default UpdateProductCrontoller;
