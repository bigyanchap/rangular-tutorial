import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

/**
 * Lesson 17's live demo: an attribute directive. The first
 * line takes its highlight colour straight from the attribute.
 * The second binds the colour to the switcher, with a fallback
 * declared beside it. The third line has no directive at all.
 */
@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives.component.html',
})
export class DirectivesDemoComponent {
  colour = 'cyan';

  onColour(value: string) {
    this.colour = value;
  }
}
