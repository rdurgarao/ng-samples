import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(args.includes('INR')) {
      return `${value} ₹`;
    }
    return `$ ${value}`;
  }

}
