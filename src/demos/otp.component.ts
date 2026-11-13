import { Component } from '@angular/core';

/**
 * Lesson 85's live demo: the OTP input. (change) emits
 * the digit string as it grows, so the demo reports
 * progress by its length and calls the code complete
 * only at the full six. Clear writes the empty string
 * back through [value].
 */
@Component({
  selector: 'app-otp-demo',
  templateUrl: './otp.component.html',
})
export class OtpDemoComponent {
  code = '';

  onCode(v: string) {
    this.code = v;
  }

  clear() {
    this.code = '';
  }
}
