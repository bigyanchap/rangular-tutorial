import { Component } from '@angular/core';
import { FavouritesService } from './favourites.service';

/**
 * Lesson 52's saved list: it reads only the favourites
 * service. What the browser saved appears here, because the
 * service is the one source of truth for both.
 */
@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
})
export class FavouriteListComponent {
  constructor(private favourites: FavouritesService) {}

  clear() {
    this.favourites.clear();
  }
}
