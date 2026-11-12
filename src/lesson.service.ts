import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LessonService {
  lessons = [
    {
      id: 1,
      title: 'Introduction',
      subtitle: 'What Rangular is, and what this app is',
      minutes: '3 min',
      intro: 'Rangular lets you write a mobile app the Angular way. You write components in TypeScript with HTML templates, and Rangular compiles them into React Native code that runs on iOS and Android. This app is the tutorial, and it is itself built with Rangular, so every screen you see is proof the compiler works.',
      code: 'Write Angular. Run native.',
      tip: 'Read each lesson, look at the short code line, then try the live demo on the same screen. The demo is real Rangular code running, not a picture.',
    },
    {
      id: 2,
      title: 'Your first component',
      subtitle: 'A class, a selector, and a template',
      minutes: '4 min',
      intro: 'A component is the building block of every screen. It is a TypeScript class with a @Component decorator. The decorator gives the component a selector (its tag name) and a template file. Fields on the class hold the screen data, and the template shows that data.',
      code: "@Component({ selector: 'app-hello', templateUrl: './hello.component.html' })",
      tip: 'Keep one component per screen or per clear piece of a screen. Small components are easy to read, test, and reuse.',
    },
    {
      id: 3,
      title: 'Interpolation',
      subtitle: 'Showing class data in the template',
      minutes: '3 min',
      intro: 'Interpolation is how a template shows a value from its class. You write the field name inside double curly braces, and Rangular puts the current value on the screen. When the field changes, the screen updates on its own. Try it in the demo below: tap the button and watch the greeting change.',
      code: '<h1>Hello, {{ name }}</h1>',
      tip: 'Interpolation is one way only: class to screen. For screen to class, you will meet event binding in the next lesson and ngModel later in the forms lessons.',
    },
    {
      id: 4,
      title: 'Event binding',
      subtitle: 'Buttons that call your methods',
      minutes: '4 min',
      intro: 'Event binding connects a tap to a method in your class. You write the event in round brackets, like (click), and name the method to run. The counter below is the classic first demo: every tap runs increment(), which changes the count field, and interpolation shows the new value.',
      code: '<button (click)="increment()">Increment</button>',
      tip: 'Keep methods small and named for what they do. A button should call one clear method, never a long chain of logic inside the template.',
    },
    {
      id: 5,
      title: 'Property binding and ngIf',
      subtitle: 'Disable a button, show or hide a block',
      minutes: '5 min',
      intro: 'Property binding sets a property of a block from the class, using square brackets, like [disabled]. The ngIf directive shows a block only when its condition is true, and removes it when the condition is false. Together they cover most of the everyday logic in a template. Try the demo: the Reset button stays disabled until the count is above zero, and a note appears once you pass five.',
      code: '<p *ngIf="count >= 5">Past five</p>',
      tip: 'If a template condition gets long, move it into a method or a field in the class. Templates should read like a page, not like a program.',
    },
  ];

  getById(id: string) {
    const found = this.lessons.find((l: any) => l.id === Number(id));
    return found === undefined ? null : found;
  }
}
