import { IUpdateUser } from '@modules/dto/User';
import AppError from '@shared/errors/AppErros';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/Users';
import UsersRepository from '../typeorm/repositories/UsersRepository';

class UpdateUserService {
  public async execute({ id, name, email }: IUpdateUser): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('user not found');
    }
    if (email) {
      const emailExist = await usersRepository.findEmail(email);
      if (emailExist?.id !== id) {
        throw new AppError('email já existe para outro usuario');
      }
      user.email = email;
    }

    user.name = name || user.name;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
