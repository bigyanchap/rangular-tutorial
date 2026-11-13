import { Component } from '@angular/core';
import { NotebookService } from './notebook.service';

/**
 * Lesson 48's writer: it adds lines to the shared notebook.
 * It receives no inputs and knows nothing about the reader.
 */
@Component({
  selector: 'app-note-writer',
  templateUrl: './note-writer.component.html',
})
export class NoteWriterComponent {
  draft = '';

  constructor(private notebook: NotebookService) {}

  add() {
    this.notebook.add(this.draft);
    this.draft = '';
  }
}
