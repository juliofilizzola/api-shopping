import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';

class ProductController {
  public async index(_req: Request, res: Response): Promise<Response> {
    const ListProduct = new ListProductService();
    const product = await ListProduct.execute();

    return res.json(product);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showProduct = new ShowProductService();
    const product = await showProduct.execute(id);

    return res.json(product);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, quantity, price } = req.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      quantity,
      price,
    });

    return res.json(product);
  }

  public async update(req: Request, res: Response): Promise<Response> {
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

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteProduct = new DeleteProductService();

    await deleteProduct.execute(id);

    return res.json({ message: 'Product deleted success' });
  }
}

export default ProductController;
