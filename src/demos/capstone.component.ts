import { Component } from '@angular/core';
import { SnackBar } from '@angular/material/snack-bar';
import { PracticeLogService } from './practice-log.service';

/**
 * Lesson 65's live demo: capstone part 2, the practice log
 * whole. A name from an input, minutes from choice buttons
 * (an input hands you text, and the total needs a number),
 * a gated Add, the shared PracticeLogService underneath, a
 * Remove on every entry, the running total, and a toast when
 * a practice is logged. Entries added in lesson 64 are still
 * here, because the service outlives the screen.
 */
@Component({
  selector: 'app-capstone-demo',
  templateUrl: './capstone.component.html',
})
export class CapstoneDemoComponent {
  name = '';
  minutes = 0;

  constructor(
    private log: PracticeLogService,
    private snack: SnackBar,
  ) {}

  setMinutes(value: number) {
    this.minutes = value;
  }

  add() {
    this.log.add(this.name, this.minutes);
    this.snack.open('Practice logged');
    this.name = '';
    this.minutes = 0;
  }

  remove(entry: any) {
    this.log.remove(entry);
  }
}
