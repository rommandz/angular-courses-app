import { Injectable } from '@angular/core';
import { courses } from '../courses/mock-courses';
import { Course } from '../courses/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses = courses;

  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }

  getCourse(id: string): Course {
    return this.courses.find(course => course.id === id);
  }

  updateCourse(updatedCourse: Course, id: string): void {
    this.courses = this.courses.map(course => course.id === id ? updatedCourse : course);
  }

  createCourse(course: Course): void {
    this.courses = [...this.courses, course];
  }

  deleteCourse(id: string): void {
    this.courses = this.courses.filter(course => course.id !== id);
  }
}
