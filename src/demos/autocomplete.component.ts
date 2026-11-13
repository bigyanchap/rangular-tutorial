import { Component } from '@angular/core';

/**
 * Lesson 42's live demo: autocomplete on an ordinary
 * input. The options are a string array in the class; a
 * pick writes back through ngModel and is also reported
 * through (optionSelected).
 */
@Component({
  selector: 'app-autocomplete-demo',
  templateUrl: './autocomplete.component.html',
})
export class AutocompleteDemoComponent {
  folder = '';
  folders = ['Inbox', 'Starred', 'Sent', 'Drafts', 'Archive', 'Spam', 'Trash'];
  picked = '';

  onPick(value: string) {
    this.picked = value;
  }
}
