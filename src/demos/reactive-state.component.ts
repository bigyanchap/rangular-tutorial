import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Lesson 35's live demo: reactive validators and group
 * state. The rules live in the class, the panel reads the
 * group state live, and the email control errors print as
 * JSON. Submit marks every control touched first.
 */
@Component({
  selector: 'app-reactive-state-demo',
  templateUrl: './reactive-state.component.html',
})
export class ReactiveStateDemoComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  saved = false;

  save() {
    this.saved = true;
  }
}
