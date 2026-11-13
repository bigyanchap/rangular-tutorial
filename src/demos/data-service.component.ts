import { Component } from '@angular/core';
import { UserService } from './user.service';

/**
 * Lesson 63's live demo: a data service. This component
 * contains no URL and no request. It asks the UserService to
 * load a user and renders the fields the service holds.
 * Previous and Next page through the first three users.
 */
@Component({
  selector: 'app-data-service-demo',
  templateUrl: './data-service.component.html',
})
export class DataServiceDemoComponent {
  constructor(private user: UserService) {}

  ngOnInit() {
    this.user.load(1);
  }

  prev() {
    this.user.load(this.user.which - 1);
  }

  next() {
    this.user.load(this.user.which + 1);
  }
}
