import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourse, Course } from '../course';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit, OnDestroy {
  public course: Course;
  private routerDataSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    this.course = new Course('New course', new Date().toString(), 0, '', false);

    this.routerDataSubscription = this.route.data.subscribe((data: { course: ICourse }) => {
      if (!data.course) {
        this.router.navigate(['../courses/new']);

        return;
      }
      this.course = data.course;
    });
  }

  ngOnDestroy() {
    this.routerDataSubscription.unsubscribe();
  }

  public onSave(): void {
    this.addNewCourse(this.course);
    this.router.navigate(['../courses']);
  }

  private addNewCourse(course: ICourse): void {
    this.coursesService.createCourse(course).subscribe();
  }

  public onCancel(): void {
    this.router.navigate(['../courses']);
  }
}
