import { Request, Response } from 'express';
import DeleteProductService from '../services/DeleteProductService';

class DeleteProductController {
  public async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteProduct = new DeleteProductService();

    await deleteProduct.execute(id);

    return res.json({ message: 'Product deleted success' });
  }
}

export default DeleteProductController;
