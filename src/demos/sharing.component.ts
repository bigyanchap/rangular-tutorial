import { Component } from '@angular/core';
import { ProfileEditorComponent } from './profile-editor.component';
import { ProfileGreeterComponent } from './profile-greeter.component';

/**
 * Lesson 50's live demo: sharing state between components.
 * The editor and the greeter are siblings. No input carries
 * the name from one to the other: the profile service does.
 */
@Component({
  selector: 'app-sharing-demo',
  templateUrl: './sharing.component.html',
})
export class SharingDemoComponent {}
