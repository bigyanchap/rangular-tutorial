import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Lesson 63's data service: the HTTP lives here, not in a
 * component. The service owns the URL, the loading and error
 * state, and the loaded fields; components call load and
 * render what the service holds. The requests are real, to
 * the same public practice API as lessons 61 and 62.
 */
@Injectable({ providedIn: 'root' })
export class UserService {
  which = 1;
  name = '';
  email = '';
  city = '';
  loading = false;
  failed = '';

  constructor(private http: HttpClient) {}

  load(id: number) {
    this.which = id;
    this.loading = true;
    this.failed = '';
    this.http.get('https://jsonplaceholder.typicode.com/users/' + id).subscribe(
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
