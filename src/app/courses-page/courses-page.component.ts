import { Component, OnInit } from '@angular/core';
import { courses } from '../mock-courses';
import { Course } from '../course';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  courses: Course[];

  constructor() { }

  ngOnInit() {
    this.courses = courses;
  }

  onCourseDelete(id: string): void {
    console.log(id);
  }

  loadMoreCourses(): void {
    console.log('load more');
  }

}
