import { Component, OnInit } from '@angular/core';
import { courses } from '../mock-courses';
import { Course } from '../course';
import { FilterCoursesPipe } from '../filter-courses.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  public courses: Course[];
  public filteredCourses: Course[];

  constructor(private filterCourses: FilterCoursesPipe) { }

  ngOnInit() {
    this.courses = courses;
    this.filteredCourses = courses;
  }

  private onFilterCourses(title: string): void {
    this.filteredCourses = this.filterCourses.transform(this.courses, title);
    console.log(title);
  }

  onCourseDelete(id: string): void {
    console.log(id);
  }

  loadMoreCourses(): void {
    console.log('load more');
  }

}
