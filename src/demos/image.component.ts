import { Component } from '@angular/core';

/**
 * Lesson 93's live demo: an image and its lightbox. The
 * image declares its size, so the layout is fixed before
 * the photo lands. Its (click) opens the lightbox on the
 * overlay contract, and the lightbox carries the same
 * photo with a caption under it.
 */
@Component({
  selector: 'app-image-demo',
  templateUrl: './image.component.html',
})
export class ImageDemoComponent {
  photoOpen = false;

  openPhoto() {
    this.photoOpen = true;
  }

  closePhoto() {
    this.photoOpen = false;
  }
}
