import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourse } from '../course';
import { CoursesService } from '../../services/courses.service';

import { MatDialog } from '@angular/material/dialog';
import { DeleteCourseDialogComponent } from '../delete-course-dialog/delete-course-dialog.component';
import { exhaustMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public courses: ICourse[] = [];

  private currentCount: number;
  private readonly countStep: number = 3;
  private textFragment: string;

  private componentDestroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.currentCount = 0;
    this.getInitialCourses();
  }

  private getInitialCourses(): void {
    this.coursesService.getCourses(this.currentCount, this.countStep)
      .pipe(takeUntil(this.componentDestroyed$))
        .subscribe(
          (courses: ICourse[]) => {
            this.courses = [ ...courses ];
            this.currentCount += this.countStep;
          },
          error => console.log(error)
        );
  }

  onSearhCourses(name: string): void {
    this.coursesService.getCourses(0, this.countStep, name)
      .pipe(takeUntil(this.componentDestroyed$))
        .subscribe(
          (courses: ICourse[]) => {
            this.currentCount = this.countStep;
            this.textFragment = name;

            this.courses = [ ...courses ];
          },
          error => console.log(error)
        );
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
    this.coursesService.deleteCourse(id)
      .pipe(
        exhaustMap(() => this.coursesService.getCourses(0, this.currentCount, this.textFragment)),
        takeUntil(this.componentDestroyed$)
      )
        .subscribe(
          (courses: ICourse[]) => {
            this.courses = [ ...courses ];
          },
          error => console.log(error)
        );
  }

  loadMoreCourses(): void {
    this.coursesService.getCourses(this.currentCount, this.countStep, this.textFragment)
      .pipe(takeUntil(this.componentDestroyed$))
        .subscribe(
          (courses: ICourse[]) => {
            this.courses = [ ...this.courses, ...courses ];
            this.currentCount += this.countStep;
          },
          error => console.log(error)
        );
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}
