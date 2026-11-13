import { Component } from '@angular/core';

/**
 * Lesson 39's live demo: a bottom sheet holding a sort
 * order choice. The sheet is declarative: [open] shows it,
 * (close) fires from the backdrop or the Done button, and
 * the radio group inside keeps its usual contract.
 */
@Component({
  selector: 'app-sheet-demo',
  templateUrl: './sheet.component.html',
})
export class SheetDemoComponent {
  sort = 'newest';
  sheetOpen = false;

  openSheet() {
    this.sheetOpen = true;
  }

  closeSheet() {
    this.sheetOpen = false;
  }

  onSort(value: string) {
    this.sort = value;
  }
}
