import { Component } from '@angular/core';
import { NoteWriterComponent } from './note-writer.component';
import { NoteReaderComponent } from './note-reader.component';

/**
 * Lesson 48's live demo: providedIn root. The writer and the
 * reader are separate components and the parent passes
 * nothing between them. The only wire is the shared service.
 */
@Component({
  selector: 'app-singleton-demo',
  templateUrl: './singleton.component.html',
})
export class SingletonDemoComponent {}
