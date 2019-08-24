import { Component, OnInit } from '@angular/core';
import { ICourse, Course } from '../course';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  public course: Course;

  constructor() { }

  ngOnInit() {
    this.course = new Course('', new Date(), 0, '', false);
  }

  public onSave(): void {
    console.log('edit-course save');
    console.log(this.course);
  }

  public onCancel(): void {
    console.log('edit-course cancel');
  }
}
