import { Component } from '@angular/core';
import { LessonService } from './lesson.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  menuOpen = false;

  constructor(private lessons: LessonService) {}

  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
