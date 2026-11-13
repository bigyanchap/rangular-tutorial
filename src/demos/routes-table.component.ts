import { Component } from '@angular/core';

/**
 * Lesson 54's live demo: routes and the outlet. The table
 * below is this app's own route table from app.routes.ts,
 * the real one, and the buttons under it are ordinary links:
 * the same navigation that brought you to this lesson.
 */
@Component({
  selector: 'app-routes-table-demo',
  templateUrl: './routes-table.component.html',
})
export class RoutesTableDemoComponent {
  table = [
    { path: '(empty path)', screen: 'Redirects to splash' },
    { path: 'splash', screen: 'SplashComponent' },
    { path: 'home', screen: 'HomeComponent' },
    { path: 'lesson/:id', screen: 'LessonComponent' },
    { path: 'about', screen: 'AboutComponent' },
    { path: '**', screen: 'NotFoundComponent' },
  ];
}
