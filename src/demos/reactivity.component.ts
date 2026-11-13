import { Component } from '@angular/core';
import { ShelfService } from './shelf.service';

/**
 * Lesson 51's live demo: the reactivity contract. The shelf
 * lives in a service. The quiet add mutates the array and the
 * list does not move; a local change then renders the screen
 * and the book appears, because it was in the data all
 * along. The proper add assigns, and the list moves at once.
 */
@Component({
  selector: 'app-reactivity-demo',
  templateUrl: './reactivity.component.html',
})
export class ReactivityDemoComponent {
  taps = 0;

  constructor(private shelf: ShelfService) {}

  quiet() {
    this.shelf.addQuietly('Book');
  }

  proper() {
    this.shelf.addProperly('Book');
  }

  tap() {
    this.taps = this.taps + 1;
  }
}
