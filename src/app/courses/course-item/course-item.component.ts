import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourse } from '../course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() course: ICourse;
  @Output() deleteCourse: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDeleteCourse(): void {
    this.deleteCourse.emit(this.course.id);
  }

  onEditCourse(): void {
    this.router.navigate(['../courses/', this.course.id]);
  }
}
