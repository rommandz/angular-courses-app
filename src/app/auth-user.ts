import { IUser } from './user';

export interface IAuthUser extends IUser {
  login: string;
  password: string;
  fakeToken: string;
}
