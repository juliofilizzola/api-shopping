import { IUserUpdate } from '@modules/dto/User';
import AppError from '@shared/errors/AppErros';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/Users';
import UsersRepository from '../typeorm/repositories/UsersRepository';

class UpdateUserService {
  public async execute({
    id,
    name,
    email,
    password,
    avatar,
  }: IUserUpdate): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findOne({ id });

    if (!user) {
      throw new AppError('Product not found');
    }

    const userEmail = await usersRepository.findByName(name);

    if (userEmail && user.id !== id) {
      throw new AppError('There is already onde product with this name');
    }

    const bPassword = password.concat('senha misteriosa');
    user.name = name;
    user.email = email;
    user.avatar = avatar || '';
    user.password = bPassword;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
