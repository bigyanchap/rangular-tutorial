import { Component } from '@angular/core';
import { LogQuickAddComponent } from './log-quick-add.component';
import { LogListComponent } from './log-list.component';

/**
 * Lesson 64's live demo: capstone part 1. A quick add writes
 * into the PracticeLogService; the list reads from it. The
 * two components share nothing but the service, which is the
 * whole design.
 */
@Component({
  selector: 'app-capstone-data-demo',
  templateUrl: './capstone-data.component.html',
})
export class CapstoneDataDemoComponent {}
