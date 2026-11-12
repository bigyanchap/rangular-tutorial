import { Component } from '@angular/core';
import { LessonService } from './lesson.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private lessons: LessonService) {}
}
