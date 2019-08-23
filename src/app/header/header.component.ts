import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { IAuthUser } from '../auth-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthorizationService) { }

  ngOnInit() {
  }

  onLogout(): void {
    this.auth.logout();
  }

  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  getUserInfo(): string {
    const user: IAuthUser = this.auth.getUserInfo();

    return this.isAuthenticated() ? `${user.name.first} ${user.name.last}` : `User login`;
  }

}
