import { Component } from '@angular/core';

/**
 * Lesson 5's live demo: property binding and ngIf. The Reset
 * button's [disabled] property and the two notes under it follow
 * the count field on their own.
 */
@Component({
  selector: 'app-bindings-demo',
  templateUrl: './bindings.component.html',
})
export class BindingsDemoComponent {
  count = 0;

  increment() {
    this.count++;
  }

  reset() {
    this.count = 0;
  }
}
