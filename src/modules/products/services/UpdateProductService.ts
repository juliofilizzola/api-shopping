import { IProductsUpdate } from '@modules/dto/Products';
import AppError from '@shared/errors/AppErros';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity,
  }: IProductsUpdate): Promise<Product> {
    const produtsRepositor = getCustomRepository(ProductsRepository);
    const product = await produtsRepositor.findOne({ id });

    if (!product) {
      throw new AppError('Product not found');
    }

    const produtsExists = await produtsRepositor.findByName(name);

    if (produtsExists) {
      throw new AppError('There is already onde product with this name');
    }

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await produtsRepositor.save(product);

    return product;
  }
}

export default UpdateProductService;
