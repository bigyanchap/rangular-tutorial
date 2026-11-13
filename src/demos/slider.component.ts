import { Component } from '@angular/core';

/**
 * Lesson 43's live demo: two sliders. Brightness snaps to
 * steps of 5 over 0 to 100, minutes to steps of 15 over 0
 * to 60. Each (change) stores the number in the field the
 * slider reads back.
 */
@Component({
  selector: 'app-slider-demo',
  templateUrl: './slider.component.html',
})
export class SliderDemoComponent {
  brightness = 40;
  minutes = 30;

  onBrightness(value: number) {
    this.brightness = value;
  }

  onMinutes(value: number) {
    this.minutes = value;
  }
}
