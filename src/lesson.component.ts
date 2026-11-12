import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from './lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
})
export class LessonComponent {
  lesson: any = null;
  lessonId = 0;
  count = 0;
  name = 'Bigyan';
  greeted = false;
  showTip = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lessonService: LessonService,
  ) {}

  ngOnInit() {
    this.lesson = this.lessonService.getById(this.route.snapshot.params.id);
    this.lessonId = this.lesson === null ? 0 : this.lesson.id;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  changeName() {
    this.greeted = true;
    this.name = 'Rangular developer';
  }

  toggleTip() {
    this.showTip = !this.showTip;
  }

  backHome() {
    this.router.navigate(['/home']);
  }
}
