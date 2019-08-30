import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(data: T[], key: string): T[] {
    return data.sort((a, b) => new Date(a[key]).getTime() - new Date(b[key]).getTime());
  }// think about it
}
