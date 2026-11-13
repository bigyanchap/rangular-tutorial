import { Component } from '@angular/core';

/**
 * Lesson 83's live demo: input masks. Both fields are
 * ordinary inputs carrying a mask attribute. The phone
 * mask is all digit slots with literal brackets, a space
 * and a dash; the member code mixes two letter slots
 * with four digit slots. What the handler receives is
 * the formatted string itself.
 */
@Component({
  selector: 'app-mask-demo',
  templateUrl: './mask.component.html',
})
export class MaskDemoComponent {
  phone = '';
  code = '';

  onPhone(v: string) {
    this.phone = v;
  }

  onCode(v: string) {
    this.code = v;
  }
}
