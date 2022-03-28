import { IProducts } from '@modules/dto/Products';
import AppError from '@shared/errors/AppErros';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

class CreateProductService {
  public async execute({ name, price, quantity }: IProducts): Promise<Product> {
    const produtsRepositor = getCustomRepository(ProductsRepository);
    const produtsExists = await produtsRepositor.findByName(name);
    if (produtsExists) {
      throw new AppError('There is already onde product with this name');
    }

    const product = produtsRepositor.create({
      name,
      price,
      quantity,
    });

    await produtsRepositor.save(product);
    return product;
  }
}

export default CreateProductService;
