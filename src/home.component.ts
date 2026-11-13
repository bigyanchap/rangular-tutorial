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
 * Home: the app bar with the menu, the lesson list in six
 * groups (getting started, components and templates, forms
 * and interaction, services, routing, and data, the
 * Material pieces, then beyond Angular), and the coming
 * next card. The groups are split from the one lessons
 * array in ngOnInit, because a row carries one structural
 * directive and the split belongs in the class.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  menuOpen = false;
  starterLessons: Lesson[] = [];
  batchLessons: Lesson[] = [];
  formsLessons: Lesson[] = [];
  dataLessons: Lesson[] = [];
  piecesLessons: Lesson[] = [];
  beyondLessons: Lesson[] = [];

  constructor(private lessons: LessonService) {}

  ngOnInit() {
    this.starterLessons = this.lessons.lessons.filter((l: Lesson) => l.id <= 5);
    this.batchLessons = this.lessons.lessons.filter((l: Lesson) => l.id >= 6 && l.id <= 25);
    this.formsLessons = this.lessons.lessons.filter((l: Lesson) => l.id >= 26 && l.id <= 45);
    this.dataLessons = this.lessons.lessons.filter((l: Lesson) => l.id >= 46 && l.id <= 65);
    this.piecesLessons = this.lessons.lessons.filter((l: Lesson) => l.id >= 66 && l.id <= 76);
    this.beyondLessons = this.lessons.lessons.filter((l: Lesson) => l.id >= 77);
  }

  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
