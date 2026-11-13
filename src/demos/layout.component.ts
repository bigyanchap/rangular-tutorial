import { Component } from '@angular/core';

/**
 * Lesson 21's live demo: cards, lists, and rows. A card groups
 * a short brief and its action; a list of rows shows the inbox
 * shapes: avatar, subtitle, time, detail, badge, and a child
 * pill inside a row. Marking all read clears the one badge
 * everywhere it appears.
 */
@Component({
  selector: 'app-layout-demo',
  templateUrl: './layout.component.html',
  styles: [`
    .pill { background-color: #c2e7ff; color: #001d35; border-radius: 9999px; padding-top: 4px; padding-bottom: 4px; padding-left: 12px; padding-right: 12px; font-size: 12px; font-weight: 700; }
  `],
})
export class LayoutDemoComponent {
  unread = 3;

  markAllRead() {
    this.unread = 0;
  }
}
