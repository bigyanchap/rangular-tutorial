import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Lesson 57's live demo: ActivatedRoute. This component is
 * not told which lesson it sits in. It reads the route it
 * arrived by: the snapshot once in ngOnInit, and paramMap by
 * subscribing, counting the emissions it receives.
 */
@Component({
  selector: 'app-activated-route-demo',
  templateUrl: './activated-route.component.html',
})
export class ActivatedRouteDemoComponent {
  snapId = '';
  mapId = '';
  emissions = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.snapId = this.route.snapshot.params.id;
    this.route.paramMap.subscribe((params) => {
      this.mapId = params.id;
      this.emissions = this.emissions + 1;
    });
  }
}
