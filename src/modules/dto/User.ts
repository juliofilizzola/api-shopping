import User from '@modules/users/typeorm/entities/Users';

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUpdateUser {
  id: string;
  name?: string;
  email?: string;
}

export interface IUpdateAvatarUser {
  id: string;
  avatar: string;
}

export interface IRequestLogin {
  email: string;
  password: string;
}

export interface IResponseLogin {
  token: string;
  user: User;
}
