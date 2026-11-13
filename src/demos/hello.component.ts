import { Component } from '@angular/core';

/**
 * Lesson 2's live demo: a real child component, rendered by the
 * lesson screen through its own tag, <app-hello>. The selector in
 * this decorator is the same one the lesson's code block shows.
 */
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
})
export class HelloComponent {}
