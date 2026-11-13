import { Component } from '@angular/core';

/**
 * Lesson 82's live demo: the file picker, both kinds.
 * The image picker reports the picked photo's name; the
 * document picker allows several at once, and the names
 * land as rows. A cancel emits nothing, so the lines
 * below only ever change on a real pick.
 */
@Component({
  selector: 'app-file-picker-demo',
  templateUrl: './file-picker.component.html',
})
export class FilePickerDemoComponent {
  photo = '';
  docs: { name: string }[] = [];

  onPhoto(files: { name: string }[]) {
    this.photo = files.length ? files[0].name : '';
  }

  onDocs(files: { name: string }[]) {
    this.docs = files;
  }
}
