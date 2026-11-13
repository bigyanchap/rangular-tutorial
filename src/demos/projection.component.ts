import { Component } from '@angular/core';
import { PanelComponent } from './panel.component';

/**
 * Lesson 13's live demo: content projection. Both panels are
 * the same child component, a card with one ng-content slot.
 * The words and the button are written here in the parent,
 * and the button calls this parent method: projected content
 * keeps the parent scope.
 */
@Component({
  selector: 'app-projection-demo',
  templateUrl: './projection.component.html',
})
export class ProjectionDemoComponent {
  noted = 0;

  note() {
    this.noted++;
  }
}
