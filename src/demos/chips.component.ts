import { Component } from '@angular/core';

/**
 * Lesson 24's live demo: chips, badges, and progress. Filter
 * chips remove themselves from the array, the badge clears
 * when the mail is marked read, the storage bar moves in
 * steps with its buttons, and the spinner shows only while
 * the sync switch is on.
 */
@Component({
  selector: 'app-chips-demo',
  templateUrl: './chips.component.html',
})
export class ChipsDemoComponent {
  filters = ['Unread', 'Has attachment', 'Starred'];
  unread = 3;
  storageUsed = 60;
  syncing = false;

  removeFilter(name: string) {
    this.filters = this.filters.filter((f: string) => f !== name);
  }

  markAllRead() {
    this.unread = 0;
  }

  less() {
    this.storageUsed = this.storageUsed - 10;
  }

  more() {
    this.storageUsed = this.storageUsed + 10;
  }

  onSync(value: boolean) {
    this.syncing = value;
  }
}
