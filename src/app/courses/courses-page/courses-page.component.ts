import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { FilterCoursesPipe } from '../filter-courses/filter-courses.pipe';
import { CoursesService } from '../../services/courses.service';

import { MatDialog } from '@angular/material/dialog';
import { DeleteCourseDialogComponent } from '../delete-course-dialog/delete-course-dialog.component';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  public courses: Course[];

  constructor(
    private coursesService: CoursesService,
    private filterCourses: FilterCoursesPipe,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  onFilterCourses(title: string): void {
    const courses: Course[] = this.coursesService.getCourses();
    this.courses = this.filterCourses.transform(courses, title);
  }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DeleteCourseDialogComponent, {
      width: '250px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe((courseId: string): void => {
      if (!!courseId) {
        this.courseDelete(courseId);
      }
    });
  }

  private courseDelete(id: string): void {
    this.coursesService.deleteCourse(id);
    this.courses = this.coursesService.getCourses();
  }

  loadMoreCourses(): void {
    console.log('load more');
  }
}