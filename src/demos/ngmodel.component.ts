import { Component } from '@angular/core';

/**
 * Lesson 26's live demo: a template driven form. Both inputs
 * bind to plain class fields with [(ngModel)], and the lines
 * under the form read the fields, so typing updates the class
 * and the screen together. The button greets from the fields.
 */
@Component({
  selector: 'app-ngmodel-demo',
  templateUrl: './ngmodel.component.html',
})
export class NgmodelDemoComponent {
  name = '';
  city = '';
  greeting = '';

  greet() {
    this.greeting = 'Hello, ' + this.name + ' from ' + this.city + '.';
  }
}
