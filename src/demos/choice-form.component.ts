import { Component } from '@angular/core';

/**
 * Lesson 44's live demo: a preferences form. The text
 * field uses ngModel; the switch, checkboxes, and radio
 * group keep their [checked] or [value] plus (change)
 * contract, each storing into its own field. One submit
 * gathers them all.
 */
@Component({
  selector: 'app-choice-form-demo',
  templateUrl: './choice-form.component.html',
})
export class ChoiceFormDemoComponent {
  name = '';
  wifi = true;
  notifications = false;
  sounds = true;
  theme = 'system';
  submitted = false;

  onWifi(value: boolean) {
    this.wifi = value;
  }

  onNotifications(value: boolean) {
    this.notifications = value;
  }

  onSounds(value: boolean) {
    this.sounds = value;
  }

  onTheme(value: string) {
    this.theme = value;
  }

  save() {
    this.submitted = true;
  }
}
