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
    const findId = await this.findOne({
      where: {
        id,
      },
    });
    console.log(findId, 'find id');

    return findId;
  }

  public async findEmail(email: string): Promise<User | undefined> {
    const userEmail = await this.findOne({
      where: {
        email,
      },
    });

    return userEmail;
  }
}

export default UsersRepository;
