import { Component } from '@angular/core';
import { MinutesStepperComponent } from './minutes-stepper.component';
import { MinutesDisplayComponent } from './minutes-display.component';

/**
 * Lesson 53's live demo: signals, honestly. There is no
 * signal() here, because Rangular does not compile Angular
 * signals yet. The reactive value is a service field, and
 * the derived value is a method read, which is the pattern
 * this framework offers today.
 */
@Component({
  selector: 'app-signals-demo',
  templateUrl: './signals.component.html',
})
export class SignalsDemoComponent {}
