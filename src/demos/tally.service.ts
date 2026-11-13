import { Injectable } from '@angular/core';

/**
 * Lesson 47's first service: a plain counter, kept in a
 * service so the demo component can be handed it.
 */
@Injectable({ providedIn: 'root' })
export class TallyService {
  count = 0;

  add() {
    this.count = this.count + 1;
  }
}
