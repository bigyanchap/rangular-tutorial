import { Component } from '@angular/core';
import { LifecycleLogService } from './lifecycle-log.service';

/**
 * Lesson 12's stamp child: it exists only while the parent demo
 * shows it. Its ngOnInit and ngOnDestroy each write one line
 * into the shared log, so the parent can show the calls in order.
 */
@Component({
  selector: 'app-stamp',
  templateUrl: './stamp.component.html',
})
export class StampComponent {
  constructor(private log: LifecycleLogService) {}

  ngOnInit() {
    this.log.entries = [...this.log.entries, 'Stamp created: ngOnInit ran'];
  }

  ngOnDestroy() {
    this.log.entries = [...this.log.entries, 'Stamp removed: ngOnDestroy ran'];
  }
}
