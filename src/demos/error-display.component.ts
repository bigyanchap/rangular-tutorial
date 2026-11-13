import { Component } from '@angular/core';

/**
 * Lesson 31's live demo: three error display channels on one
 * small form. The email field uses its own [error] slot, the
 * password field uses a gated line under it, and the status
 * line turns green through a [class.ready] toggle over a
 * class declared in the component styles.
 */
@Component({
  selector: 'app-error-display-demo',
  templateUrl: './error-display.component.html',
  styles: [`
    .ready { color: #137333; font-weight: 700; }
  `],
})
export class ErrorDisplayDemoComponent {
  email = '';
  password = '';
}
