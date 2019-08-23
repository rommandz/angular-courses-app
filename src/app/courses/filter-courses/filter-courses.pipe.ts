import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../course';

@Pipe({
  name: 'filterCourses'
})
export class FilterCoursesPipe implements PipeTransform {

  transform(courses: ICourse[], title: string): ICourse[] {
    if (!title) {
      return courses;
    }

    return courses.filter(course => course.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
  }

}
