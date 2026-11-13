import { Component } from '@angular/core';

/**
 * Lesson 56's live demo: route parameters. Each row sends a
 * different number into the same lesson/:id entry. The last
 * button reopens this very lesson, the same path with the
 * same parameter, so the rebuild is visible.
 */
@Component({
  selector: 'app-route-params-demo',
  templateUrl: './route-params.component.html',
})
export class RouteParamsDemoComponent {}
