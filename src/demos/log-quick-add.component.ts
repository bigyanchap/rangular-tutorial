import { Component } from '@angular/core';
import { PracticeLogService } from './practice-log.service';

/**
 * Capstone part 1's quick add: three honest buttons, each
 * one a single call into the log service. No form yet: this
 * lesson builds the data layer and its simplest writer.
 */
@Component({
  selector: 'app-log-quick-add',
  templateUrl: './log-quick-add.component.html',
})
export class LogQuickAddComponent {
  constructor(private log: PracticeLogService) {}

  yoga() {
    this.log.add('Yoga', 20);
  }

  puja() {
    this.log.add('Puja', 15);
  }

  reading() {
    this.log.add('Reading', 10);
  }
}
