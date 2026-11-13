import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Lesson 34's live demo: a FormGroup bound with [formGroup]
 * and formControlName. The group value prints live as JSON
 * while you type, and the save handler reads the same object.
 */
@Component({
  selector: 'app-form-group-demo',
  templateUrl: './form-group.component.html',
})
export class FormGroupDemoComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl(''),
  });
  summary = '';

  save() {
    this.summary = JSON.stringify(this.profileForm.value);
  }
}
