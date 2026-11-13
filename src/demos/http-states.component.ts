import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Lesson 62's live demo: honest request states. The list
 * loads when the screen opens. Loading shows a spinner and a
 * line; failure shows the error and a Retry that calls the
 * same method again; success shows the users as rows and a
 * count. Reload stays disabled while a request is in flight.
 */
@Component({
  selector: 'app-http-states-demo',
  templateUrl: './http-states.component.html',
})
export class HttpStatesDemoComponent {
  users: any[] = [];
  loading = false;
  failed = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
    this.failed = '';
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (data) => {
        this.users = data;
        this.loading = false;
      },
      (err) => {
        this.failed = 'The user list could not be loaded. Check the connection and retry.';
        this.loading = false;
      },
    );
  }
}
