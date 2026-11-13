import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Lesson 11's child piece: a quote card. The quote comes in
 * through an input, and pressing Save emits the quote text out
 * through the saved output, for the parent to record.
 */
@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
})
export class QuoteCardComponent {
  @Input() quote = '';
  @Output() saved = new EventEmitter<string>();

  save() {
    this.saved.emit(this.quote);
  }
}
