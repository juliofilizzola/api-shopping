import { IRequestLogin, IResponseLogin } from '@modules/dto/User';
import statusCode from '@modules/utils/statusCode';
import AppError from '@shared/errors/AppErros';
import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/repositories/UsersRepository';

class CreateSessionsServicies {
  public async execute({
    email,
    password,
  }: IRequestLogin): Promise<IResponseLogin> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findEmail(email);

    if (!user) {
      throw new AppError('Incorrect Datas', statusCode.unauthorized);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Incorrect Datas', statusCode.unauthorized);
    }

    return {
      user,
      token: 'lsjmalsajd',
    };
  }
}

export default CreateSessionsServicies;
