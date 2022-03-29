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

  public async findById(id: string): Promise<User | undefined> {
    const findId = await this.findById(id);
    return findId;
  }
}

export default UsersRepository;
