import { Component } from '@angular/core';

/**
 * Lesson 14's live demo: template reference variables. The
 * input carries ngModel, and the #nameField ref reads as the
 * ngModel, so the lines below can ask the ref for valid and
 * touched while you type. ngModel itself is taught in full
 * in the forms batch; here the ref is the star.
 */
@Component({
  selector: 'app-refs-demo',
  templateUrl: './refs.component.html',
})
export class RefsDemoComponent {
  name = '';
}
