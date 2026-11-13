import { Component } from '@angular/core';

/**
 * Lesson 88's live demo: the calendar month view. The
 * selected day rides [value] in and (change) out as an
 * ISO string, and the line below shows the string the
 * class actually holds. The button writes the seed day
 * back, proving the value is the class's field and not
 * the calendar's private state.
 */
@Component({
  selector: 'app-calendar-demo',
  templateUrl: './calendar.component.html',
})
export class CalendarDemoComponent {
  day = '2026-11-13T00:00:00';

  onDay(v: string) {
    this.day = v;
  }

  backToSeed() {
    this.day = '2026-11-13T00:00:00';
  }
}
