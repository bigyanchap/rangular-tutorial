import { Component } from '@angular/core';
import { TallyService } from './tally.service';
import { TrailService } from './trail.service';

/**
 * Lesson 47's live demo: constructor injection. Two services
 * are declared as constructor parameter properties, and the
 * framework hands both in. One tap uses each: the tally
 * counts, the trail records the count as a line.
 */
@Component({
  selector: 'app-injection-demo',
  templateUrl: './injection.component.html',
})
export class InjectionDemoComponent {
  constructor(
    private tally: TallyService,
    private trail: TrailService,
  ) {}

  tallyAndRecord() {
    this.tally.add();
    this.trail.record('The tally reached ' + this.tally.count);
  }
}
