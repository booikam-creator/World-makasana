import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, search: string, replacement: string): string {
    if (!value) return '';

    // This replaces all occurrences. Use a RegExp if you need case-insensitivity.
    return value.replaceAll(search, replacement);
  }
}

