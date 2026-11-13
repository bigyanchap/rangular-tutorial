import { Injectable } from '@angular/core';

/**
 * Lesson 46's service: the quotes live here, in one place.
 * Any component that injects this service reads the same
 * quotes and the same position in them.
 */
@Injectable({ providedIn: 'root' })
export class QuoteService {
  quotes = [
    'Practice is the mother of skill.',
    'What you repeat every day, you become.',
    'Small steps, taken daily, cross the mountain.',
  ];
  position = 0;

  currentQuote() {
    return this.quotes[this.position];
  }

  next() {
    this.position = (this.position + 1) % this.quotes.length;
  }
}
