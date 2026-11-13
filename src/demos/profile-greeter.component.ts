import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

/**
 * Lesson 50's greeter: it receives no inputs at all. It reads
 * the shared profile service directly, so a save in the
 * editor changes this greeting at once.
 */
@Component({
  selector: 'app-profile-greeter',
  templateUrl: './profile-greeter.component.html',
})
export class ProfileGreeterComponent {
  constructor(private profile: ProfileService) {}
}
