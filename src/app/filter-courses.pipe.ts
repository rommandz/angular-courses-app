import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course';

@Pipe({
  name: 'filterCourses'
})
export class FilterCoursesPipe implements PipeTransform {

  transform(courses: Course[], title: string): Course[] {
    return courses.filter(course => course.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
  }

}
