import { Component } from '@angular/core';

/**
 * Lesson 92's live demo: the marked text editor. The
 * seed value carries the three marks: double stars for
 * bold, a single star for italic, and a dash line for a
 * list entry. The button appends one more list line by
 * assignment, and the count line reports the length of
 * the stored text, marks included.
 */
@Component({
  selector: 'app-editor-demo',
  templateUrl: './editor.component.html',
})
export class EditorDemoComponent {
  notes = 'Saw the **sunrise** again, and sat in *silence*.\n- Walked the river road\n- Meditated';

  onNotes(v: string) {
    this.notes = v;
  }

  addLine() {
    this.notes = this.notes + '\n- Evening walk';
  }
}
