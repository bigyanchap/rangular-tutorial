import { Component } from '@angular/core';
import { PracticeTileComponent } from './practice-tile.component';

/**
 * Lesson 9's live demo: child components. The same practice
 * tile tag is written three times, and each tile is its own
 * instance with its own count, so tapping one moves only one.
 */
@Component({
  selector: 'app-child-demo',
  templateUrl: './child.component.html',
})
export class ChildDemoComponent {}
