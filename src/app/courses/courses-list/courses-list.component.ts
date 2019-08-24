import { Component, OnInit } from '@angular/core';
import { ICourse } from '../course';
import { FilterCoursesPipe } from '../filter-courses/filter-courses.pipe';
import { CoursesService } from '../../services/courses.service';

import { MatDialog } from '@angular/material/dialog';
import { DeleteCourseDialogComponent } from '../delete-course-dialog/delete-course-dialog.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  public courses: ICourse[];

  constructor(
    private coursesService: CoursesService,
    private filterCourses: FilterCoursesPipe,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  onFilterCourses(title: string): void {
    const courses: ICourse[] = this.coursesService.getCourses();
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