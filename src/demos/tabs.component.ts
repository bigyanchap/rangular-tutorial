import { Component } from '@angular/core';

/**
 * Lesson 22's live demo: tabs and accordion. The tabs own two
 * mail panels and follow the [index] and (change) contract.
 * The accordion below stacks two panels; each opens on tap
 * and only one stays open.
 */
@Component({
  selector: 'app-tabs-demo',
  templateUrl: './tabs.component.html',
})
export class TabsDemoComponent {
  tabIndex = 0;
  inboxMails = [
    { from: 'Sarju', subject: 'Train tickets for Friday' },
    { from: 'Medium', subject: 'Your weekly reading list' },
  ];
  starredMails = [
    { from: 'Awaken Me', subject: 'Launch checklist' },
  ];

  onTab(index: number) {
    this.tabIndex = index;
  }
}
