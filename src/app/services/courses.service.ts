import { Injectable } from '@angular/core';
import { courses } from '../courses/mock-courses';
import { ICourse } from '../courses/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses = courses;

  constructor() { }

  getCourses(): ICourse[] {
    return this.courses;
  }

  getCourse(id: string): ICourse {
    return this.courses.find(course => course.id === id);
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
