import { Component } from '@angular/core';

/**
 * Lesson 68's live demo: a select. The value starts empty,
 * so the field shows its placeholder. Picking a city fires
 * (change) with the option's value, the handler stores it,
 * and the line below shows the stored code. The field
 * itself shows the chosen option's label.
 */
@Component({
  selector: 'app-select-demo',
  templateUrl: './select.component.html',
})
export class SelectDemoComponent {
  city = '';

  onCity(v: string) {
    this.city = v;
  }

  clear() {
    this.city = '';
  }
}
