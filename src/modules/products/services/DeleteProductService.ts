import AppError from '@shared/errors/AppErros';
import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

class DeleteProductService {
  public async execute(id: string): Promise<void> {
    const produtsRepositor = getCustomRepository(ProductsRepository);
    const product = await produtsRepositor.findOne({ id });

    if (!product) {
      throw new AppError('Product not found');
    }

    await produtsRepositor.remove(product);
  }
}

export default DeleteProductService;
