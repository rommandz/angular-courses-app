import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';


import { ICourse } from './course';
import { CoursesService } from '../services/courses.service';


@Injectable({
  providedIn: 'root'
})
export class EditCourseResolverService implements Resolve<ICourse> {

  constructor(private coursesService: CoursesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ICourse {
    const id = route.paramMap.get('id');

    return this.coursesService.getCourse(id);
  }
}
