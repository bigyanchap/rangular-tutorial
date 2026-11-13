import { Component } from '@angular/core';
import { MinutesService } from './minutes.service';

/**
 * Lesson 53's stepper: it only changes the value in the
 * service. It displays nothing itself.
 */
@Component({
  selector: 'app-minutes-stepper',
  templateUrl: './minutes-stepper.component.html',
})
export class MinutesStepperComponent {
  constructor(private focus: MinutesService) {}

  add15() {
    this.focus.add(15);
  }

  add30() {
    this.focus.add(30);
  }

  reset() {
    this.focus.reset();
  }
}
