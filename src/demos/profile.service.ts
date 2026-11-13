import { Injectable } from '@angular/core';

/**
 * Lesson 50's shared profile: one name and one practice,
 * written by the editor component and read by the greeter
 * component, which are siblings and pass nothing directly.
 */
@Injectable({ providedIn: 'root' })
export class ProfileService {
  name = 'friend';
  practice = 'yoga';

  setName(name: string) {
    this.name = name;
  }

  setPractice(practice: string) {
    this.practice = practice;
  }
}
