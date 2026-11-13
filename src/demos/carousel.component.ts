import { Component } from '@angular/core';

/**
 * Lesson 86's live demo: the carousel. Three cards are
 * the pages, in order, with no page tag anywhere. The
 * index field rides the (change) event, so the line
 * below always names the settled page.
 */
@Component({
  selector: 'app-carousel-demo',
  templateUrl: './carousel.component.html',
})
export class CarouselDemoComponent {
  page = 0;

  onPage(i: number) {
    this.page = i;
  }
}
