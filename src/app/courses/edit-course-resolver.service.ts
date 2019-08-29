import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { take, catchError } from 'rxjs/operators';

import { ICourse } from './course';
import { CoursesService } from '../services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class EditCourseResolverService implements Resolve<ICourse> {

  constructor(private router: Router, private coursesService: CoursesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICourse> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.coursesService.getCourse(id).pipe(
      take(1),
      catchError((error: HttpErrorResponse) => {
        console.log(error.message);
        console.log('redirecting to courses ...');

        this.router.navigate(['../courses']);

        return EMPTY;
      })
    );
  }
}
