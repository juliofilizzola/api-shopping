import { IUser } from '@modules/dto/User';
import AppError from '@shared/errors/AppErros';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/Users';
import UsersRepository from '../typeorm/repositories/UsersRepository';

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    avatar,
  }: IUser): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userExists = await usersRepository.findByName(email);
    if (userExists) {
      throw new AppError('There is already email!');
    }

    const bPassword = password.concat('essa é a senha');

    const user = usersRepository.create({
      password: bPassword,
      name,
      avatar,
      email,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
