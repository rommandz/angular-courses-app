import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private login = '';
  private password = '';

  constructor(private auth: AuthorizationService) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.auth.login(this.login, this.password);
  }

  isLoginFieldsNotEmpty(login: string, password: string): boolean {
    return !login.length || !password.length;
  }
}
