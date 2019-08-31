import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { courses } from '../courses/mock-courses';
import { ICourse } from '../courses/course';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses = courses;

  constructor(private http: HttpClient) { }

  getCourses(start: number, count: number, textFragment?: string): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(BASE_URL, {
      params: {
        start: start.toString(),
        count: count.toString(),
        ...(textFragment ? { textFragment } : {})
      }
    });
  }

  getCourse(id: string): Observable<ICourse> {
    return this.http.get<ICourse>(`${BASE_URL}/${id}`);
  }

  createCourse(course: ICourse): Observable<ICourse> {
    return this.http.post<ICourse>(BASE_URL, course);
  }

  updateCourse(updatedCourse: ICourse, id: string): void {
    this.courses = this.courses.map(course => course.id === id ? updatedCourse : course);
  }

  deleteCourse(id: string): Observable<ICourse> {
    return this.http.delete<ICourse>(`${BASE_URL}/${id}`);
  }
}
