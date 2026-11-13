import { Component } from '@angular/core';

/**
 * Lesson 38's live demo: a time picker on five minute
 * steps, and a datetime picker in the default combined
 * mode. Both emit the same local ISO string shape.
 */
@Component({
  selector: 'app-time-picker-demo',
  templateUrl: './time-picker.component.html',
})
export class TimePickerDemoComponent {
  at = '2026-11-13T09:00:00';
  when = '2026-11-13T09:00:00';

  onAt(value: string) {
    this.at = value;
  }

  onWhen(value: string) {
    this.when = value;
  }
}
