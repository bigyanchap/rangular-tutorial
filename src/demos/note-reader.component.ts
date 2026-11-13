import { Component } from '@angular/core';
import { NotebookService } from './notebook.service';

/**
 * Lesson 48's reader: a separate component that injects the
 * same notebook service and renders what it holds. If the
 * writer's lines appear here, both hold one instance.
 */
@Component({
  selector: 'app-note-reader',
  templateUrl: './note-reader.component.html',
})
export class NoteReaderComponent {
  constructor(private notebook: NotebookService) {}
}
