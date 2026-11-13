import { Component } from '@angular/core';

/**
 * Lesson 69's live demo: a select inside a small form.
 * The text field uses ngModel, the switch uses its own
 * contract, and the select uses [value] and (change): the
 * handler stores the picked value in a field, and the
 * save button and the save handler read that field, like
 * every other value in the form. There is no ngModel on
 * the select, because ngModel binds text inputs only.
 */
@Component({
  selector: 'app-select-form-demo',
  templateUrl: './select-form.component.html',
})
export class SelectFormDemoComponent {
  name = '';
  city = '';
  guided = false;
  savedLine = '';

  onCity(v: string) {
    this.city = v;
  }

  onGuided(v: boolean) {
    this.guided = v;
  }

  save() {
    this.savedLine =
      'Saved: ' + this.name + ' visits ' + this.city + (this.guided ? ', with a guide.' : ', on their own.');
  }
}
