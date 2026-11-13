import { Component } from '@angular/core';
import { FavouritesService } from './favourites.service';

/**
 * Lesson 52's browser: three quotes of its own, each with a
 * Save button that asks the favourites service to keep it.
 * The browser keeps no list of what was saved.
 */
@Component({
  selector: 'app-quote-browser',
  templateUrl: './quote-browser.component.html',
})
export class QuoteBrowserComponent {
  quotes = [
    'Practice is the mother of skill.',
    'What you repeat every day, you become.',
    'Small steps, taken daily, cross the mountain.',
  ];

  constructor(private favourites: FavouritesService) {}

  save(quote: string) {
    this.favourites.save(quote);
  }
}
