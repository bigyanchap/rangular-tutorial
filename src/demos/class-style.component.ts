import { Component } from '@angular/core';

/**
 * Lesson 8's live demo: class and style bindings, honestly.
 * Dynamic class and style bindings are not wired in Rangular
 * yet, so this demo uses the pattern that works: named classes
 * in the component styles, and ngIf swapping which pre-styled
 * line shows. Each button picks a look, one line renders.
 */
@Component({
  selector: 'app-class-style-demo',
  templateUrl: './class-style.component.html',
  styles: [`
    .look-calm { color: #5f6368; }
    .look-alert { color: #b3261e; font-weight: 700; }
    .look-big { font-size: 20px; font-weight: 600; }
  `],
})
export class ClassStyleDemoComponent {
  look = 'calm';

  show(look: string) {
    this.look = look;
  }
}
