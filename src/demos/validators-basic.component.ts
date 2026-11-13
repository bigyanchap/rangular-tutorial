import { Component } from '@angular/core';

/**
 * Lesson 28's live demo: required, minlength, and maxlength
 * as attributes. The ref reads the field state, and the
 * messages name the exact rule that failed, with the numbers
 * from the errors object.
 */
@Component({
  selector: 'app-validators-basic-demo',
  templateUrl: './validators-basic.component.html',
})
export class ValidatorsBasicDemoComponent {
  username = '';
}
