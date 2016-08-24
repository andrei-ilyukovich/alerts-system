import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseOrder'
})
export class ReversePipe implements PipeTransform {
  transform(arr) {
    let copy = arr.slice();
    return copy.reverse();
  }
}
