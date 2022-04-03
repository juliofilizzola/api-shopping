import { IUser } from '@modules/dto/User';
import AppError from '@shared/errors/AppErros';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/Users';
import UsersRepository from '../typeorm/repositories/UsersRepository';

class CreateUserService {
  public async execute({ name, email, password }: IUser): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userExists = await usersRepository.findEmail(email);

    if (userExists) {
      throw new AppError('There is already email!');
    }
    const rounds = 16;
    const bPassword = await hash(password, rounds);

    const user = usersRepository.create({
      password: bPassword,
      name,
      email,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
