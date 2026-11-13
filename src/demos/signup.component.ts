import { Component } from '@angular/core';
import { SnackBar } from '@angular/material/snack-bar';

/**
 * Lesson 45's live demo: the complete sign up form.
 * Template driven fields with validators and refs, error
 * lines gated on touched, a terms checkbox on the change
 * contract, a submit button gated on every ref, and a
 * SnackBar answering the save.
 */
@Component({
  selector: 'app-signup-demo',
  templateUrl: './signup.component.html',
})
export class SignupDemoComponent {
  name = '';
  email = '';
  password = '';
  terms = false;
  submitted = false;

  constructor(private snack: SnackBar) {}

  onTerms(value: boolean) {
    this.terms = value;
  }

  save() {
    this.submitted = true;
    this.snack.open('Account created');
  }
}
