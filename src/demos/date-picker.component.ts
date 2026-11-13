import { Component } from '@angular/core';

/**
 * Lesson 37's live demo: two date pickers planning a trip.
 * Each holds an ISO day string, Done writes the new string
 * through (change), and Cancel would leave it untouched.
 */
@Component({
  selector: 'app-date-picker-demo',
  templateUrl: './date-picker.component.html',
})
export class DatePickerDemoComponent {
  startDay = '2026-11-13';
  endDay = '2026-11-20';

  onStart(value: string) {
    this.startDay = value;
  }

  onEnd(value: string) {
    this.endDay = value;
  }
}
