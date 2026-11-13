import { Component } from '@angular/core';
import { LifecycleLogService } from './lifecycle-log.service';
import { StampComponent } from './stamp.component';

/**
 * Lesson 12's live demo: lifecycle. The stamp child exists
 * only while show is true. Its ngOnInit and ngOnDestroy write
 * into the shared log service, and the lines below read the
 * log in the order the calls happened.
 */
@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle.component.html',
})
export class LifecycleDemoComponent {
  show = false;

  constructor(private log: LifecycleLogService) {}

  toggle() {
    this.show = !this.show;
  }
}
