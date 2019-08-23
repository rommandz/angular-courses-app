import { Component, OnInit } from '@angular/core';
import { courses } from '../mock-courses';
import { ICourse } from '../course';
import { FilterCoursesPipe } from '../filter-courses/filter-courses.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  public courses: ICourse[];
  public filteredCourses: ICourse[];

  constructor(private filterCourses: FilterCoursesPipe) { }

  ngOnInit() {
    this.courses = courses;
    this.filteredCourses = courses;
  }

  onFilterCourses(title: string): void {
    this.filteredCourses = this.filterCourses.transform(this.courses, title);
  }

  onCourseDelete(id: string): void {
    console.log(id);
  }

  loadMoreCourses(): void {
    console.log('load more');
  }

}
