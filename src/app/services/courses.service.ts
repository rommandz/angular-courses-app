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

  getCourses(start: number, count: number): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(BASE_URL, { params: { start: start.toString(), count: count.toString() } });
  }

  getCourse(id: string): Observable<ICourse> {
    return this.http.get<ICourse>(`${BASE_URL}/${id}`);
  }

  updateCourse(updatedCourse: ICourse, id: string): void {
    this.courses = this.courses.map(course => course.id === id ? updatedCourse : course);
  }

  createCourse(course: ICourse): void {
    this.courses = [...this.courses, course];
  }

  deleteCourse(id: string): void {
    this.courses = this.courses.filter(course => course.id !== id);
  }
}
