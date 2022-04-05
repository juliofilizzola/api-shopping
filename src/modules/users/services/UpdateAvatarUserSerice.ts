import { IUserUpdate } from '@modules/dto/User';
import AppError from '@shared/errors/AppErros';
import { stat, unlink } from 'fs/promises';
import path from 'path';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/Users';
import UsersRepository from '../typeorm/repositories/UsersRepository';

class UpdateAvatarUserService {
  public async execute({ id, avatar }: IUserUpdate): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('user not found');
    }

    

    if (user.avatar) {
      const userAvatarPath = path.join(upload.directory, user.avatar);

      const userAvatarExist = await stat(userAvatarPath);
      if (userAvatarExist) {
        await unlink(userAvatarPath);
      }
    }

    user.avatar = avatar;
    await usersRepository.save(user);

    return user;
  }
}

export default UpdateAvatarUserService;
