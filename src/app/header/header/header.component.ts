import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$: Observable<IUser>;

  constructor(private auth: AuthorizationService, private router: Router) { }

  ngOnInit() {
    this.user$ = this.auth.getUserInfo();
  }

  onLogout(): void {
    this.auth.logout();

    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }
}
