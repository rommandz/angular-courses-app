import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from '../user';
import { IAuthUser } from '../auth-user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3004/auth';

interface Token {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  public login(login: string, password: string): Observable<string> {
    const body = { login, password };

    return this.http.post<Token>(`${BASE_URL}/login`, body).pipe(
      map((token: Token) => token.token)
    );
  }

  public getUserInfo(): Observable<IUser> {
    return this.http.post<IAuthUser>(`${BASE_URL}/userinfo`, {}).pipe(
      map((authUser: IAuthUser) => ({ id: authUser.id, name: authUser.name }))
    );
  }

  public isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public saveAuthToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getAuthToken(): string {
    return localStorage.getItem('token') || '';
  }
}
