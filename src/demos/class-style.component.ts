import { Component } from '@angular/core';

/**
 * Lesson 8's live demo: class and style bindings, honestly.
 * A [class.name] binding over a class declared in the component
 * styles is wired and toggles live, so the highlight line below
 * uses it. The whole-object forms ([class], [ngClass], [style],
 * [ngStyle]) are not wired; the compiler warns about them
 * (GEN_CLASS_BINDING, GEN_STYLE_BINDING) instead of staying
 * silent. For a whole look change, named classes in the
 * component styles with ngIf swapping which pre-styled line
 * shows is the pattern, and the three look lines use it. The
 * try it field at the end renders your own words in all three
 * looks at once, so the classes are visible side by side.
 */
@Component({
  selector: 'app-class-style-demo',
  templateUrl: './class-style.component.html',
  styles: [`
    .look-calm { color: #5f6368; }
    .look-alert { color: #b3261e; font-weight: 700; }
    .look-big { font-size: 20px; font-weight: 600; }
    .look-highlight { background-color: #fef7e0; }
  `],
})
export class ClassStyleDemoComponent {
  look = 'calm';
  highlighted = false;
  ownLine = 'My own line';

  show(look: string) {
    this.look = look;
  }

  toggleHighlight() {
    this.highlighted = !this.highlighted;
  }
}
