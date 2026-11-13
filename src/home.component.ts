import { Component } from '@angular/core';
import { LessonService } from './lesson.service';

type Lesson = {
  id: number;
  title: string;
  subtitle: string;
  minutes: string;
  intro: string;
  code: string;
  tip: string;
};

/**
 * Home: the app bar with the menu, the lesson list in two
 * groups (getting started, then components and templates), and
 * the coming next card. The two groups are split from the one
 * lessons array in ngOnInit, because a row carries one
 * structural directive and the split belongs in the class.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  menuOpen = false;
  starterLessons: Lesson[] = [];
  batchLessons: Lesson[] = [];

  constructor(private lessons: LessonService) {}

  ngOnInit() {
    this.starterLessons = this.lessons.lessons.filter((l: Lesson) => l.id <= 5);
    this.batchLessons = this.lessons.lessons.filter((l: Lesson) => l.id >= 6);
  }

  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
