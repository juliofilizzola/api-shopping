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
