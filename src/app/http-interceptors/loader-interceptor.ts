import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';

import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.Sent) {
          this.requests = [...this.requests, req];
          this.loaderService.getIsLoadingSubject().next(!!this.requests);
        }
      }),
      finalize(() => {
        const reqIndex: number = this.requests.indexOf(req);

        this.requests = this.requests.filter((request: HttpRequest<any>, index: number) => index !== reqIndex);
        this.loaderService.getIsLoadingSubject().next(!!this.requests);
      })
    );
  }
}
