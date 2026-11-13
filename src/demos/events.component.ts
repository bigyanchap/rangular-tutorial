import { Component } from '@angular/core';
import { SnackBar } from '@angular/material/snack-bar';

/**
 * Lesson 4's live demo: event binding. The counter buttons call
 * the increment and decrement methods, and the third button calls
 * a method that asks the SnackBar service for a toast.
 */
@Component({
  selector: 'app-events-demo',
  templateUrl: './events.component.html',
})
export class EventsDemoComponent {
  count = 0;

  constructor(private snack: SnackBar) {}

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  announce() {
    this.snack.open('Button clicked!');
  }
}
