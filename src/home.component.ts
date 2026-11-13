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
 * Home: the app bar with the menu, the lesson list in four
 * groups (getting started, components and templates, forms
 * and interaction, then services, routing, and data), and
 * the coming next card. The groups are split from the one
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
  formsLessons: Lesson[] = [];
  dataLessons: Lesson[] = [];

  constructor(private lessons: LessonService) {}

  ngOnInit() {
    this.starterLessons = this.lessons.lessons.filter((l: Lesson) => l.id <= 5);
    this.batchLessons = this.lessons.lessons.filter((l: Lesson) => l.id >= 6 && l.id <= 25);
    this.formsLessons = this.lessons.lessons.filter((l: Lesson) => l.id >= 26 && l.id <= 45);
    this.dataLessons = this.lessons.lessons.filter((l: Lesson) => l.id >= 46);
  }

  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
