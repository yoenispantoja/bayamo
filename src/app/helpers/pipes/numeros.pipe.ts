import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeros'
})
export class NumerosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
