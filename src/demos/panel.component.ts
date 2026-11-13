import { Component } from '@angular/core';

/**
 * Lesson 13's frame piece: a card with one ng-content slot.
 * Whatever the parent writes between the panel tags renders
 * where the slot sits, and still belongs to the parent.
 */
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
})
export class PanelComponent {}
