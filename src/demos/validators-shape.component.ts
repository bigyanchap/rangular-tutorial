import { Component } from '@angular/core';

/**
 * Lesson 29's live demo: the email validator and a pattern
 * validator. The email input carries both type="email" (the
 * keyboard) and the email attribute (the rule). The code
 * input must match the pattern [0-9]{4} as a whole.
 */
@Component({
  selector: 'app-validators-shape-demo',
  templateUrl: './validators-shape.component.html',
})
export class ValidatorsShapeDemoComponent {
  email = '';
  code = '';
}
