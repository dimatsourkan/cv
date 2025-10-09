import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: Array<string|number>, separator: string = ", "): string {

    if (!value) {
      return "";
    }

    return value.join(separator);

  }

}
