import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { IAuthUser } from '../../auth-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthorizationService, private router: Router) { }

  ngOnInit() {
  }

  onLogout(): void {
    this.auth.logout();

    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  getUserInfo(): string {
    const user: IAuthUser = this.auth.getUserInfo();

    return this.isAuthenticated() ? `${user.name.first} ${user.name.last}` : `User login`;
  }

}
