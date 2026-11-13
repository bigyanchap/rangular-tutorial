import { Component } from '@angular/core';

/**
 * Lesson 30's live demo: form state read through the ref.
 * The panel prints value, valid, touched, and the errors
 * object as JSON, live. The submit button shows the submit
 * courtesy: the attempt marks the field touched.
 */
@Component({
  selector: 'app-form-state-demo',
  templateUrl: './form-state.component.html',
})
export class FormStateDemoComponent {
  name = '';
  attempted = false;

  attempt() {
    this.attempted = true;
  }
}
