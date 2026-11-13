import { Component } from '@angular/core';
import { GreetingCardComponent } from './greeting-card.component';

/**
 * Lesson 10's live demo: inputs. The parent owns the teacher
 * fields and binds them into the greeting card. Cycling the
 * teacher changes the parent fields, and the card re-renders
 * with the new input values.
 */
@Component({
  selector: 'app-inputs-demo',
  templateUrl: './inputs.component.html',
})
export class InputsDemoComponent {
  private teachers = [
    { name: 'Acharya Rajan', role: 'Yoga' },
    { name: 'Pankaj Shukla', role: 'AI and agents' },
    { name: 'Monika Sogam', role: 'Guided meditation voice' },
  ];
  private index = 0;
  teacherName = 'Acharya Rajan';
  teacherRole = 'Yoga';

  cycle() {
    this.index = (this.index + 1) % this.teachers.length;
    this.teacherName = this.teachers[this.index].name;
    this.teacherRole = this.teachers[this.index].role;
  }
}
