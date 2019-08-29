import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../course';

@Pipe({
  name: 'filterCourses'
})
export class FilterCoursesPipe implements PipeTransform {

  transform(courses: ICourse[], name: string): ICourse[] {
    if (!name) {
      return courses;
    }

    return courses.filter(course => course.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }

}
