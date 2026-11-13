import { Component } from '@angular/core';

/**
 * Lesson 7's live demo: ngIf in depth. One block shows while
 * signedIn is true and its opposite shows while it is false:
 * the pair that stands in for an else branch in Rangular. A
 * ternary in the last line picks between two texts.
 */
@Component({
  selector: 'app-ngif-demo',
  templateUrl: './ngif.component.html',
})
export class NgifDemoComponent {
  signedIn = false;

  toggle() {
    this.signedIn = !this.signedIn;
  }
}
