import { Component } from '@angular/core';

/**
 * Lesson 25's live demo: theming. A small screen sits inside
 * this lesson with its theme bound to the switcher. Flipping
 * the switcher changes one attribute on that screen, and every
 * block inside re-renders from the other token palette. The
 * blocks themselves do not change at all. The try it field
 * sets the panel heading, so your own words are what the
 * theme re-skins.
 */
@Component({
  selector: 'app-theming-demo',
  templateUrl: './theming.component.html',
})
export class ThemingDemoComponent {
  mode = 'light';
  taps = 0;
  panelLine = 'A themed panel';

  onMode(value: string) {
    this.mode = value;
  }

  tap() {
    this.taps++;
  }
}
