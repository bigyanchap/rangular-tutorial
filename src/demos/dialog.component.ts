import { Component } from '@angular/core';

/**
 * Lesson 40's live demo: the confirmation dialog. Delete
 * asks first; the work happens in the confirming handler,
 * and Cancel only closes. The note can be restored from
 * the screen afterwards.
 */
@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog.component.html',
})
export class DialogDemoComponent {
  confirmOpen = false;
  noteDeleted = false;

  openConfirm() {
    this.confirmOpen = true;
  }

  closeConfirm() {
    this.confirmOpen = false;
  }

  deleteNote() {
    this.confirmOpen = false;
    this.noteDeleted = true;
  }

  restore() {
    this.noteDeleted = false;
  }
}
