import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * Lesson 36's live demo: setValue from code. The buttons
 * fill and clear the form without any typing, and the
 * counter is fed by a valueChanges subscription taken in
 * ngOnInit, so it counts typing and setValue writes alike.
 */
@Component({
  selector: 'app-set-value-demo',
  templateUrl: './set-value.component.html',
})
export class SetValueDemoComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(''),
  });
  changes = 0;

  ngOnInit() {
    this.profileForm.get('name').valueChanges.subscribe((v) => {
      this.changes = this.changes + 1;
    });
  }

  fillSample() {
    this.profileForm.get('name').setValue('Maya');
    this.profileForm.get('city').setValue('Pokhara');
  }

  clearAll() {
    this.profileForm.get('name').setValue('');
    this.profileForm.get('city').setValue('');
  }
}
