import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

/**
 * Lesson 50's editor: it drafts locally, then saves into the
 * shared profile service. Its drafts start from whatever the
 * service currently holds.
 */
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
})
export class ProfileEditorComponent {
  nameDraft = '';
  practiceDraft = '';

  constructor(private profile: ProfileService) {}

  ngOnInit() {
    this.nameDraft = this.profile.name;
    this.practiceDraft = this.profile.practice;
  }

  save() {
    this.profile.setName(this.nameDraft);
    this.profile.setPractice(this.practiceDraft);
  }
}
