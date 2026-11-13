import { Component } from '@angular/core';

/**
 * Lesson 3's live demo: type-and-mirror. The input carries the
 * typing into the `name` field with [(ngModel)], and the greeting
 * below shows the field with interpolation, so the typed text
 * appears under the box at the same time.
 */
@Component({
  selector: 'app-interpolation-demo',
  templateUrl: './interpolation.component.html',
})
export class InterpolationDemoComponent {
  name = 'Bigyan';
}
