import { Component } from '@angular/core';

/**
 * Lesson 72's live demo: a grid list in masonry mode. The
 * tiles carry different amounts of text on purpose. In the
 * plain grid they would line up in rows and leave gaps
 * under the short ones; in masonry mode they are dealt
 * into two column stacks, so each tile sits under the
 * shortest stack and the heights stagger.
 */
@Component({
  selector: 'app-masonry-demo',
  templateUrl: './masonry.component.html',
})
export class MasonryDemoComponent {}
