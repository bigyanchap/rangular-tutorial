import { Component } from '@angular/core';

/**
 * Lesson 32's live demo: submitting a form. The submit
 * button stays disabled until both refs are valid, and the
 * handler reads the values from the class fields. The Clear
 * button keeps its own click inside the form.
 */
@Component({
  selector: 'app-submit-demo',
  templateUrl: './submit.component.html',
})
export class SubmitDemoComponent {
  name = '';
  email = '';
  savedLine = '';

  save() {
    this.savedLine = this.name + ' (' + this.email + ')';
  }

  clear() {
    this.name = '';
    this.email = '';
    this.savedLine = '';
  }
}
