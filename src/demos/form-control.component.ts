import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Lesson 33's live demo: one FormControl, watched closely.
 * There is no [formControl] binding yet, so the control
 * travels in a one control group and binds by name. The
 * lines read the control state through get('code'), and the
 * buttons write into it with setValue.
 */
@Component({
  selector: 'app-form-control-demo',
  templateUrl: './form-control.component.html',
})
export class FormControlDemoComponent {
  inviteForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  applied = '';

  useSample() {
    this.inviteForm.get('code').setValue('YOGA10');
  }

  clear() {
    this.inviteForm.get('code').setValue('');
  }

  apply() {
    this.applied = String(this.inviteForm.get('code').value);
  }
}
