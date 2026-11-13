import { Component } from '@angular/core';

/**
 * Lesson 70's live demo: a three step stepper. The class
 * holds the position in stepIndex: header taps arrive
 * through (change), and the Continue and Back buttons move
 * the same field, so both paths steer one stepper. Steps
 * before the current one carry a check in the header.
 */
@Component({
  selector: 'app-stepper-demo',
  templateUrl: './stepper.component.html',
})
export class StepperDemoComponent {
  stepIndex = 0;
  practice = '';

  onStep(i: number) {
    this.stepIndex = i;
  }

  next() {
    this.stepIndex = this.stepIndex + 1;
  }

  back() {
    this.stepIndex = this.stepIndex - 1;
  }

  pick(name: string) {
    this.practice = name;
    this.stepIndex = 1;
  }
}
