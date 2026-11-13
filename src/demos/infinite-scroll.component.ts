import { Component } from '@angular/core';

/**
 * Lesson 79's live demo: infinite scroll. The list starts
 * with the first page of a reading list. (endReached)
 * appends the next page by assignment, once per approach,
 * until the pages run out and the done flag rests. Reset
 * restores the first page and the first stage.
 */
@Component({
  selector: 'app-infinite-scroll-demo',
  templateUrl: './infinite-scroll.component.html',
})
export class InfiniteScrollDemoComponent {
  firstPage = [
    { id: 1, title: 'Article 1: Begin with the breath' },
    { id: 2, title: 'Article 2: The spine, held easy' },
    { id: 3, title: 'Article 3: Sitting without force' },
    { id: 4, title: 'Article 4: Attention returns' },
  ];

  morePages: any[] = [
    [
      { id: 5, title: 'Article 5: The witness stance' },
      { id: 6, title: 'Article 6: Sound and silence' },
      { id: 7, title: 'Article 7: The pause between' },
      { id: 8, title: 'Article 8: Ending well' },
    ],
    [
      { id: 9, title: 'Article 9: Carrying it into the day' },
      { id: 10, title: 'Article 10: Review and rest' },
    ],
  ];

  items = [
    { id: 1, title: 'Article 1: Begin with the breath' },
    { id: 2, title: 'Article 2: The spine, held easy' },
    { id: 3, title: 'Article 3: Sitting without force' },
    { id: 4, title: 'Article 4: Attention returns' },
  ];
  page = 0;
  done = false;

  loadMore() {
    this.items = this.items.concat(this.morePages[this.page] || []);
    this.page = this.page + 1;
    this.done = this.page >= this.morePages.length;
  }

  reset() {
    this.items = [...this.firstPage];
    this.page = 0;
    this.done = false;
  }
}
