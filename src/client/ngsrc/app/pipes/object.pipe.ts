import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'object'
})

export class ObjectPipe implements PipeTransform {
  transform(value: any, exclude: string | string[]): any {
    if (!value) {
      return value;
    }

    const keys = [];

    for (const key of Object.keys(value)) {
      if (exclude.indexOf(key) !== -1) {
        continue;
      }

      keys.push({key: key, value: value[key]});
    }

    return keys;
  }
}
