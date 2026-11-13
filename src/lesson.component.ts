import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from './lesson.service';
import { HelloComponent } from './demos/hello.component';
import { InterpolationDemoComponent } from './demos/interpolation.component';
import { EventsDemoComponent } from './demos/events.component';
import { BindingsDemoComponent } from './demos/bindings.component';
import { ListsDemoComponent } from './demos/lists.component';
import { NgifDemoComponent } from './demos/ngif.component';
import { ClassStyleDemoComponent } from './demos/class-style.component';
import { ChildDemoComponent } from './demos/child.component';
import { InputsDemoComponent } from './demos/inputs.component';
import { OutputsDemoComponent } from './demos/outputs.component';
import { LifecycleDemoComponent } from './demos/lifecycle.component';
import { ProjectionDemoComponent } from './demos/projection.component';
import { RefsDemoComponent } from './demos/refs.component';
import { PipesDemoComponent } from './demos/pipes.component';
import { CustomPipesDemoComponent } from './demos/custom-pipes.component';
import { DirectivesDemoComponent } from './demos/directives.component';
import { SwitchCheckboxDemoComponent } from './demos/switch-checkbox.component';
import { RadioSwitcherDemoComponent } from './demos/radio-switcher.component';
import { IconsDemoComponent } from './demos/icons.component';
import { LayoutDemoComponent } from './demos/layout.component';
import { TabsDemoComponent } from './demos/tabs.component';
import { TablesDemoComponent } from './demos/tables.component';
import { ChipsDemoComponent } from './demos/chips.component';
import { ThemingDemoComponent } from './demos/theming.component';
import { NgmodelDemoComponent } from './demos/ngmodel.component';
import { InputTypesDemoComponent } from './demos/input-types.component';
import { ValidatorsBasicDemoComponent } from './demos/validators-basic.component';
import { ValidatorsShapeDemoComponent } from './demos/validators-shape.component';
import { FormStateDemoComponent } from './demos/form-state.component';
import { ErrorDisplayDemoComponent } from './demos/error-display.component';
import { SubmitDemoComponent } from './demos/submit.component';
import { FormControlDemoComponent } from './demos/form-control.component';
import { FormGroupDemoComponent } from './demos/form-group.component';
import { ReactiveStateDemoComponent } from './demos/reactive-state.component';
import { SetValueDemoComponent } from './demos/set-value.component';
import { DatePickerDemoComponent } from './demos/date-picker.component';
import { TimePickerDemoComponent } from './demos/time-picker.component';
import { SheetDemoComponent } from './demos/sheet.component';
import { DialogDemoComponent } from './demos/dialog.component';
import { SnackbarDemoComponent } from './demos/snackbar.component';
import { AutocompleteDemoComponent } from './demos/autocomplete.component';
import { SliderDemoComponent } from './demos/slider.component';
import { ChoiceFormDemoComponent } from './demos/choice-form.component';
import { SignupDemoComponent } from './demos/signup.component';

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
