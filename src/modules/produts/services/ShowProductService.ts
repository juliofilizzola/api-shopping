import AppError from '@shared/errors/AppErros';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

class ShowProductService {
  public async execute(id: string): Promise<Product | undefined> {
    const produtsRepositor = getCustomRepository(ProductsRepository);
    const product = await produtsRepositor.findOne({ id });

    if (!product) {
      throw new AppError('Product not found');
    }

    return product;
  }
}

export default ShowProductService;
