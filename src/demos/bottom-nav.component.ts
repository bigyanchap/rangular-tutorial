import { Component } from '@angular/core';

/**
 * Lesson 77's live demo: bottom navigation. A small screen
 * sits inside the lesson so the bar can pin under it, as
 * it does under a real screen. The bar follows the tabs
 * contract: [index] in, (change) out, and the three panels
 * above swap on the one index field with ngIf. The Mail
 * item carries a badge, as a nav item may.
 */
@Component({
  selector: 'app-bottom-nav-demo',
  templateUrl: './bottom-nav.component.html',
})
export class BottomNavDemoComponent {
  tab = 0;

  onTab(i: number) {
    this.tab = i;
  }
}
