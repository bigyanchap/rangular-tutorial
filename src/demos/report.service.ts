import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

/**
 * Lesson 49's outer service: it injects the counter service
 * the same way a component would, relays bumps to it, and
 * shapes its value into a report line. The relayed field is
 * its own, assigned on every bump, so screens that inject
 * this service render again when the counter moves.
 */
@Injectable({ providedIn: 'root' })
export class ReportService {
  relayed = 0;

  constructor(private counter: CounterService) {}

  bump() {
    this.counter.bump();
    this.relayed = this.relayed + 1;
  }

  report() {
    return 'The counter stands at ' + this.counter.value;
  }
}
