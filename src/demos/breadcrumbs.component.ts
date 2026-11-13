import { Component } from '@angular/core';

/**
 * Lesson 95's live demo: breadcrumbs. The first two
 * crumbs carry (click) handlers that switch the place
 * line below, standing in for the navigation they would
 * do in a real app, so the piece can be felt without
 * leaving the lesson. The last crumb carries nothing:
 * it is the current page, in plain text.
 */
@Component({
  selector: 'app-breadcrumbs-demo',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsDemoComponent {
  place = 'Lesson 95';

  goPlace(name: string) {
    this.place = name;
  }
}
