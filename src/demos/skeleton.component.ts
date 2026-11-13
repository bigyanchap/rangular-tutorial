import { Component } from '@angular/core';

/**
 * Lesson 80's live demo: skeleton placeholders. One flag
 * swaps the profile between its skeleton card (a circle
 * for the photo, lines for the text, a block for the
 * note) and the real card, the ngIf opposite pair. In a
 * real app the flag follows the fetch; here a button
 * flips it, so both states are one tap away.
 */
@Component({
  selector: 'app-skeleton-demo',
  templateUrl: './skeleton.component.html',
})
export class SkeletonDemoComponent {
  loading = true;

  toggleLoading() {
    this.loading = !this.loading;
  }
}
