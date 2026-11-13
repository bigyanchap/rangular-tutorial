import { Component } from '@angular/core';
import { QuoteCardComponent } from './quote-card.component';

/**
 * Lesson 11's live demo: outputs. Two quote cards receive
 * their quote through an input and report each save through
 * the saved output. The parent counts the saves and keeps
 * the last quote the event carried.
 */
@Component({
  selector: 'app-outputs-demo',
  templateUrl: './outputs.component.html',
})
export class OutputsDemoComponent {
  quotes = [
    'Silence is a source of great strength.',
    'What you seek is seeking you.',
  ];
  saveCount = 0;
  lastSaved = '';

  recordSave(quote: string) {
    this.saveCount++;
    this.lastSaved = quote;
  }
}
