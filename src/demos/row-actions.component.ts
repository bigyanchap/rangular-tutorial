import { Component } from '@angular/core';

/**
 * Lesson 81's live demo: swipe row actions. Each row
 * declares a Star and a Delete action inside itself.
 * Star reports below; Delete removes the row by filter
 * assignment, so the swipe does the whole job. In the
 * preview, a small reveal handle stands in for the swipe.
 */
@Component({
  selector: 'app-row-actions-demo',
  templateUrl: './row-actions.component.html',
})
export class RowActionsDemoComponent {
  lastAction = '';

  mails = [
    { id: 1, from: 'Sarju', subject: 'Photos from the weekend' },
    { id: 2, from: 'Medium', subject: 'Your weekly reading list' },
    { id: 3, from: 'Field Notes', subject: 'Transformer testing, day one' },
    { id: 4, from: 'Google', subject: 'Security alert' },
  ];

  star(subject: string) {
    this.lastAction = 'Starred: ' + subject;
  }

  remove(subject: string) {
    this.mails = this.mails.filter((m) => m.subject !== subject);
    this.lastAction = 'Deleted: ' + subject;
  }
}
