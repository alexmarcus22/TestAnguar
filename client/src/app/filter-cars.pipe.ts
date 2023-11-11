import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCars',
  pure: false
})
export class FilterCarsPipe implements PipeTransform {
  transform(masiniP: any[], masini: any[]): any {
    if (!masiniP || !masini) {
      return masiniP;
    }
    return masini.filter(item => masiniP.includes(item.id));
  }
}
