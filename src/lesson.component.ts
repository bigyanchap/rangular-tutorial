import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from './lesson.service';
import { HelloComponent } from './demos/hello.component';
import { InterpolationDemoComponent } from './demos/interpolation.component';
import { EventsDemoComponent } from './demos/events.component';
import { BindingsDemoComponent } from './demos/bindings.component';

/**
 * One lesson screen. The lesson data comes from LessonService by
 * the route's id. Each lesson's live demo is its own small
 * component under src/demos/, hosted below when the lesson has
 * one; this component holds no demo state of its own.
 */
@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
})
export class LessonComponent {
  lesson: any = null;
  lessonId = 0;

  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonService,
  ) {}

  ngOnInit() {
    this.lesson = this.lessonService.getById(this.route.snapshot.params.id);
    this.lessonId = this.lesson === null ? 0 : this.lesson.id;
  }
}
