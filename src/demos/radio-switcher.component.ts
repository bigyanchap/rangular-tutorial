import { Component } from '@angular/core';

/**
 * Lesson 19's live demo: radio group and switcher. Both hold
 * exactly one value under the same contract, [value] in and
 * (change) out. The switcher flips the panels with ngIf; the
 * radio group picks which pre-styled size line shows.
 */
@Component({
  selector: 'app-radio-switcher-demo',
  templateUrl: './radio-switcher.component.html',
  styles: [`
    .sample-s { font-size: 12px; }
    .sample-m { font-size: 14px; }
    .sample-l { font-size: 20px; }
  `],
})
export class RadioSwitcherDemoComponent {
  view = 'list';
  size = 'm';

  onView(value: string) {
    this.view = value;
  }

  onSize(value: string) {
    this.size = value;
  }
}
