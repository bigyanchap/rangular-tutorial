import { Component, Input } from '@angular/core';

/**
 * Lesson 10's child piece: a greeting card that knows nothing
 * until the parent hands it values through its two inputs. When
 * the parent fields change, the card renders the new values.
 */
@Component({
  selector: 'app-greeting-card',
  templateUrl: './greeting-card.component.html',
})
export class GreetingCardComponent {
  @Input() name = '';
  @Input() role = '';
}
