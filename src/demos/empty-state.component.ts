import { Component } from '@angular/core';

/**
 * Lesson 90's live demo: the empty state in its real
 * job. The inbox starts empty, so the empty state shows
 * with its one real action, loading the sample messages.
 * The clear button empties the array by assignment and
 * the nothing returns: the opposite ngIf pair does the
 * swapping.
 */
@Component({
  selector: 'app-empty-state-demo',
  templateUrl: './empty-state.component.html',
})
export class EmptyStateDemoComponent {
  messages: { id: number; from: string; subject: string }[] = [];

  load() {
    this.messages = [
      { id: 1, from: 'Sarju', subject: 'Photos from the weekend' },
      { id: 2, from: 'Medium', subject: 'Your weekly reading list' },
    ];
  }

  clear() {
    this.messages = [];
  }
}
