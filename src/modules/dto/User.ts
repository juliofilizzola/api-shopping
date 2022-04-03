import User from '@modules/users/typeorm/entities/Users';

export interface IUser {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export interface IUserUpdate {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export interface IRequestLogin {
  email: string;
  password: string;
}

export interface IResponseLogin {
  token: string;
  user: User;
}
