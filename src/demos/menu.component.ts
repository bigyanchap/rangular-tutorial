import { Component } from '@angular/core';

/**
 * Lesson 66's live demo: a menu of actions for one message.
 * The menu is an overlay driven by a boolean: [open] shows
 * it, (close) fires when the backdrop is tapped or an item
 * is chosen. Choosing an item runs its own handler first,
 * then the menu closes, so the last action line below can
 * only appear after a real pick.
 */
@Component({
  selector: 'app-menu-demo',
  templateUrl: './menu.component.html',
})
export class MenuDemoComponent {
  menuOpen = false;
  lastAction = '';

  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  act(name: string) {
    this.lastAction = name;
  }
}
