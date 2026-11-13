import { Component } from '@angular/core';
import { DurationPipe } from './duration.pipe';

/**
 * Lesson 16's live demo: a custom pipe. The buttons change
 * the raw minutes field in steps; the duration pipe, imported
 * here like any class, formats the same number for the eye.
 * The try it slider sets the minutes directly, and the pipe
 * answers at once.
 */
@Component({
  selector: 'app-custom-pipes-demo',
  templateUrl: './custom-pipes.component.html',
})
export class CustomPipesDemoComponent {
  minutes = 75;

  add() {
    this.minutes = this.minutes + 15;
  }

  take() {
    this.minutes = this.minutes - 15;
  }

  reset() {
    this.minutes = 75;
  }

  onMinutes(value: number) {
    this.minutes = value;
  }
}
