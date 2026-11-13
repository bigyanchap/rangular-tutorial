import { Component } from '@angular/core';

/**
 * Lesson 67's live demo: a drawer, the full height panel
 * from the left. The three section buttons inside it set
 * the section shown below and close the drawer, the way
 * tapping a destination in a real app's drawer both moves
 * you and puts the panel away. The Home screen of this app
 * uses the same piece for its menu.
 */
@Component({
  selector: 'app-drawer-demo',
  templateUrl: './drawer.component.html',
})
export class DrawerDemoComponent {
  navOpen = false;
  section = 'Inbox';

  openNav() {
    this.navOpen = true;
  }

  closeNav() {
    this.navOpen = false;
  }

  go(name: string) {
    this.section = name;
    this.navOpen = false;
  }
}
