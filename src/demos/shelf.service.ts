import { Injectable } from '@angular/core';

/**
 * Lesson 51's shelf: the same add done two ways. addQuietly
 * mutates the array in place, so no field is assigned and no
 * screen is told. addProperly assigns a new array, which is
 * the assignment that notifies every reader.
 */
@Injectable({ providedIn: 'root' })
export class ShelfService {
  items = ['Yoga mat'];

  addQuietly(name: string) {
    this.items.push(name);
  }

  addProperly(name: string) {
    this.items = [...this.items, name];
  }
}
