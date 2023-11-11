import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTable'
})
export class FilterTablePipe implements PipeTransform {

  transform(list: any[], value: string) {
    return value ? list.filter(item => item.gender === value) : list;
  }
}
