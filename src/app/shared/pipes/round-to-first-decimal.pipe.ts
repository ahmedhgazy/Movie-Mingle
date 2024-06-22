import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundToFirstDecimal',
})
export class RoundToFirstDecimalPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value)) {
      return 'NaN';
    }
    return value.toFixed(1);
  }
}
