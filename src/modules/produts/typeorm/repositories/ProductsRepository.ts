import { IProducts } from '@modules/dto/Products';
import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {
  public async findByName(name: string): Promise<Product | undefined> {
    const result = await this.findOne({
      where: {
        name,
      },
    });

    return result;
  }

  public async createProduct({
    name,
    quantity,
    price,
  }: IProducts): Promise<Product> {
    const result = await this.createProduct({
      name,
      quantity,
      price,
    });
    return result;
  }
}
