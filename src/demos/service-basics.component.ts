import { Component } from '@angular/core';
import { QuoteService } from './quote.service';

/**
 * Lesson 46's live demo: a first service. The quotes and the
 * position live in the QuoteService. This component holds no
 * quote data at all: it asks the service for the current
 * quote and tells it to move on.
 */
@Component({
  selector: 'app-service-basics-demo',
  templateUrl: './service-basics.component.html',
})
export class ServiceBasicsDemoComponent {
  constructor(private quotes: QuoteService) {}

  next() {
    this.quotes.next();
  }
}
