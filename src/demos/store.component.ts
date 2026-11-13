import { Component } from '@angular/core';
import { QuoteBrowserComponent } from './quote-browser.component';
import { FavouriteListComponent } from './favourite-list.component';

/**
 * Lesson 52's live demo: a service as the store. The browser
 * writes through the service, the list reads from it, and
 * neither component holds a copy of the saved quotes.
 */
@Component({
  selector: 'app-store-demo',
  templateUrl: './store.component.html',
})
export class StoreDemoComponent {}
