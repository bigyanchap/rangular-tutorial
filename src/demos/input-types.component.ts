import { Component } from '@angular/core';

/**
 * Lesson 27's live demo: the input block in its four types.
 * Each field binds with ngModel so the echo lines below show
 * what the class holds. The checkbox disables the email field
 * through the [disabled] binding.
 */
@Component({
  selector: 'app-input-types-demo',
  templateUrl: './input-types.component.html',
})
export class InputTypesDemoComponent {
  name = '';
  email = '';
  age = '';
  pin = '';
  lockEmail = false;

  onLock(value: boolean) {
    this.lockEmail = value;
  }
}
