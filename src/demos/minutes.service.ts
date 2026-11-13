import { Injectable } from '@angular/core';

/**
 * Lesson 53's reactive value: focus minutes, held as a plain
 * service field. Assignment is what updates every reader;
 * anything derived from it is computed when read, never
 * stored as a second copy.
 */
@Injectable({ providedIn: 'root' })
export class MinutesService {
  minutes = 0;

  add(amount: number) {
    this.minutes = this.minutes + amount;
  }

  reset() {
    this.minutes = 0;
  }
}
