import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Lesson 58's live demo: programmatic navigation. The Go
 * button reads a lesson number from the input and navigates
 * from a method, not from a link. The other two buttons show
 * navigateByUrl and navigate going to fixed places.
 */
@Component({
  selector: 'app-programmatic-nav-demo',
  templateUrl: './programmatic-nav.component.html',
})
export class ProgrammaticNavDemoComponent {
  target = '';

  constructor(private router: Router) {}

  go() {
    this.router.navigate(['/lesson', this.target]);
  }

  goAbout() {
    this.router.navigateByUrl('/about');
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
