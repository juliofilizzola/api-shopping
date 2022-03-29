import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/Users';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async findByName(name: string): Promise<User | undefined> {
    const findName = await this.findOne({
      where: {
        name,
      },
    });

    return findName;
  }
}

export default UsersRepository;
