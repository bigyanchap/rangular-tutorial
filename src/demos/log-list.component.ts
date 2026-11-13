import { Component } from '@angular/core';
import { PracticeLogService } from './practice-log.service';

/**
 * Capstone part 1's list: it only reads the log service, the
 * entries and the running total, and shows an empty state
 * until the first practice lands.
 */
@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
})
export class LogListComponent {
  constructor(private log: PracticeLogService) {}
}
