import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(data: T[], key: string): T[] {
    return data.sort((a, b) => a[key] - b[key]);
  }

}
