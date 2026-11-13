import { Component } from '@angular/core';

/**
 * Lesson 78's live demo: pull to refresh on a list. The
 * handler sets the refreshing flag, prepends the fresh
 * note by assignment, and clears the flag: the whole
 * contract in three moves. The data is local, so it lands
 * at once; the count line proves the event fired, in the
 * app by a pull and in the preview by its cue.
 */
@Component({
  selector: 'app-refresh-demo',
  templateUrl: './refresh.component.html',
})
export class RefreshDemoComponent {
  refreshing = false;
  refreshCount = 0;

  notes = [
    { id: 1, title: 'Morning practice', detail: 'Sunrise session, 25 minutes' },
    { id: 2, title: 'Reading', detail: 'Part 23 of the series' },
    { id: 3, title: 'Walk', detail: 'The river road, there and back' },
  ];

  reload() {
    this.refreshing = true;
    this.refreshCount++;
    this.notes = [{ id: 100 + this.refreshCount, title: 'Fresh note ' + this.refreshCount, detail: 'Pulled in by your refresh' }].concat(this.notes);
    this.refreshing = false;
  }
}
