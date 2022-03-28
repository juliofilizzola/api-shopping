import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const produtsRepositor = getCustomRepository(ProductsRepository);
    const product = await produtsRepositor.find();
    return product;
  }
}

export default ListProductService;
