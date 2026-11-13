import { Pipe, PipeTransform } from '@angular/core';

/**
 * Lesson 16's custom pipe: takes a number of minutes and
 * returns display text, 75 becomes 1h 15m and 45 stays 45m.
 * It only formats; the number in the class never changes.
 */
@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return hours > 0 ? hours + 'h ' + minutes + 'm' : minutes + 'm';
  }
}
