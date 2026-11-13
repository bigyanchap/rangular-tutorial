import { Injectable } from '@angular/core';

/**
 * Lesson 52's store: the saved quotes live here and only
 * here. save and clear are the only doors that change the
 * list, and both change it by assignment.
 */
@Injectable({ providedIn: 'root' })
export class FavouritesService {
  saved: string[] = [];

  save(quote: string) {
    this.saved = this.saved.includes(quote) ? this.saved : [...this.saved, quote];
  }

  clear() {
    this.saved = [];
  }
}
