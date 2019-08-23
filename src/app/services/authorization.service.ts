import { Injectable } from '@angular/core';
import { IUser } from '../user';
import { IAuthUser } from '../auth-user';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  public login(login: string, password: string): void {
    if (login === 'admin' && password === 'admin') {
      const fakeAuthUser: IAuthUser = {
        id: '123456',
        name: {
          first: 'Roman',
          last: 'Mandziuk',
        },
        fakeToken: '0000000',
        login,
        password
      };

      localStorage.setItem('currentUser', JSON.stringify(fakeAuthUser));
    } else {
      console.log('auth error');
    }
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  public getUserInfo(): IAuthUser {
    const currentUser: IAuthUser = JSON.parse(localStorage.getItem('currentUser'));

    return currentUser;
  }
}
