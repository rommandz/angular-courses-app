import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public login = '';
  public password = '';

  constructor(private auth: AuthorizationService, public router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.auth.login(this.login, this.password).subscribe(
      (token: string) => {
        this.auth.saveAuthToken(token);
        this.router.navigate(['/courses']);
      },
      (error => console.log(error))
    );
  }

  isLoginFieldsNotEmpty(login: string, password: string): boolean {
    return !login.length || !password.length;
  }
}
