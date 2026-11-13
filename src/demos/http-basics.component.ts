import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Lesson 61's live demo: HttpClient. The button makes a real
 * GET request to a public practice API and shows the user it
 * returns. The first arrow assigns the fields on success;
 * the second arrow carries the failure. In the browser
 * preview the client is a stub that never answers, so the
 * demo waits at Loading there; on a phone with a connection
 * the request is genuine.
 */
@Component({
  selector: 'app-http-basics-demo',
  templateUrl: './http-basics.component.html',
})
export class HttpBasicsDemoComponent {
  name = '';
  email = '';
  city = '';
  loading = false;
  failed = '';

  constructor(private http: HttpClient) {}

  load() {
    this.loading = true;
    this.failed = '';
    this.http.get('https://jsonplaceholder.typicode.com/users/1').subscribe(
      (data) => {
        this.name = data.name;
        this.email = data.email;
        this.city = data.address.city;
        this.loading = false;
      },
      (err) => {
        this.failed = 'The request failed. Check the connection and try again.';
        this.loading = false;
      },
    );
  }
}
