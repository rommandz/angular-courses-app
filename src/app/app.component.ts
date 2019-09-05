import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-courses-app';
  public isLoading$: Observable<boolean>;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.isLoading$ = this.loaderService.getIsLoadingObservable();
  }

}
