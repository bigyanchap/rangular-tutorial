import { Component } from '@angular/core';

/**
 * Lesson 59's live demo: redirects and the wildcard. Both
 * buttons leave this lesson on purpose. The first opens a
 * path no entry claims, so the wildcard answers with the not
 * found screen. The second opens the root path, so the empty
 * path redirect sends it on to the splash screen.
 */
@Component({
  selector: 'app-redirects-demo',
  templateUrl: './redirects.component.html',
})
export class RedirectsDemoComponent {}
