import { Component } from '@angular/core';

/**
 * Lesson 91's live demo: three charts, one array. The
 * week of practice minutes is drawn as bars, a line, and
 * a pie, all bound to the same field. Adding minutes
 * rebuilds the array by assignment, the Wednesday entry
 * carried at its new value, and every chart follows,
 * because every chart reads the same source.
 */
@Component({
  selector: 'app-charts-demo',
  templateUrl: './charts.component.html',
})
export class ChartsDemoComponent {
  week = [
    { label: 'Mon', value: 12 },
    { label: 'Tue', value: 19 },
    { label: 'Wed', value: 9 },
    { label: 'Thu', value: 15 },
  ];
  total = 55;

  addWednesday() {
    this.week = [
      this.week[0],
      this.week[1],
      { label: 'Wed', value: this.week[2].value + 5 },
      this.week[3],
    ];
    this.total = this.total + 5;
  }

  reset() {
    this.week = [
      { label: 'Mon', value: 12 },
      { label: 'Tue', value: 19 },
      { label: 'Wed', value: 9 },
      { label: 'Thu', value: 15 },
    ];
    this.total = 55;
  }
}
