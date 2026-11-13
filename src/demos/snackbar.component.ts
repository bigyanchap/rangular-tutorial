import { Component } from '@angular/core';
import { SnackBar } from '@angular/material/snack-bar';

/**
 * Lesson 41's live demo: SnackBar messages with actions.
 * Save opens a plain message. Delete opens a bar with an
 * Undo action, subscribed in the statement form, and the
 * callback brings the note back.
 */
@Component({
  selector: 'app-snackbar-demo',
  templateUrl: './snackbar.component.html',
})
export class SnackbarDemoComponent {
  noteDeleted = false;
  restored = false;

  constructor(private snack: SnackBar) {}

  save() {
    this.snack.open('Note saved');
  }

  deleteNote() {
    this.noteDeleted = true;
    this.restored = false;
    const ref = this.snack.open('Note deleted', 'Undo');
    ref.onAction(() => {
      this.noteDeleted = false;
      this.restored = true;
    });
  }
}
