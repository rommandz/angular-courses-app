import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  getIsLoadingSubject(): BehaviorSubject<boolean> {
    return this.isLoading;
  }

  getIsLoadingObservable(): Observable<boolean> {
    return this.isLoading.asObservable();
  }
}
