import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-courses-app';

  constructor(private auth: AuthorizationService) {}

  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }
}
