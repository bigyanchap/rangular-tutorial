import { Component } from '@angular/core';

/**
 * Lesson 15's live demo: built in pipes. One set of raw class
 * values is shown through the date, number, percent, currency,
 * and slice pipes. Two try it controls drive the same pipes
 * live: a slider sets the price the currency pipes format,
 * and the word box runs whatever you type through the case
 * pipes and slice.
 */
@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes.component.html',
})
export class PipesDemoComponent {
  day = '2026-11-13T07:30:00';
  amount = 1234567.891;
  ratio = 0.756;
  price = 49.5;
  word = 'rangular';

  onPrice(value: number) {
    this.price = value;
  }
}
