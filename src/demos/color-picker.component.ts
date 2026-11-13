import { Component } from '@angular/core';

/**
 * Lesson 94's live demo: the colour picker. The line
 * under the picker prints the hex the class holds, so
 * the value channel is visible as it changes. Reset
 * writes the starting blue back through [value].
 */
@Component({
  selector: 'app-color-picker-demo',
  templateUrl: './color-picker.component.html',
})
export class ColorPickerDemoComponent {
  brand = '#0b57d0';

  onBrand(v: string) {
    this.brand = v;
  }

  reset() {
    this.brand = '#0b57d0';
  }
}
