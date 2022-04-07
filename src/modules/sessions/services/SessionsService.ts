import auth from '@config/auth';
import { IRequestLogin, IResponseLogin } from '@modules/dto/User';
import statusCode from '@modules/utils/statusCode';
import AppError from '@shared/errors/AppErros';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../../users/typeorm/repositories/UsersRepository';

class SessionsServicies {
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

    const secret = auth.jwt.secret || '';
    const token = sign({ user: user.id }, secret, {
      subject: user.id,
      expiresIn: auth.jwt.expiresIn,
    });
    console.log('jhhjh');

    return {
      user,
      token,
    };
  }
}
export default SessionsServicies;
