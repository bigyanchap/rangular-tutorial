import { Component } from '@angular/core';

/**
 * Lesson 84's live demo: the rating control. The tapped
 * star's number arrives through (change); the verdict
 * word is read from a small table by that number, so
 * the class stays free of branches.
 */
@Component({
  selector: 'app-rating-demo',
  templateUrl: './rating.component.html',
})
export class RatingDemoComponent {
  score = 0;
  verdict = '';
  words = ['', 'Rough', 'Shaky', 'Steady', 'Strong', 'Excellent'];

  onScore(n: number) {
    this.score = n;
    this.verdict = this.words[n];
  }
}
