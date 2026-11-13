import { Component } from '@angular/core';

/**
 * Lesson 74's live demo: tooltips on the three pressable
 * hosts. Long press the button, the icon button, or the
 * row, and a small bubble names what it does. Tapping them
 * works as usual, and the line below records the last tap,
 * so the two gestures stay easy to tell apart.
 */
@Component({
  selector: 'app-tooltip-demo',
  templateUrl: './tooltip.component.html',
})
export class TooltipDemoComponent {
  lastTap = '';

  tap(name: string) {
    this.lastTap = name;
  }
}
