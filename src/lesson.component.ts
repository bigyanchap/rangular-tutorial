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
import { ServiceBasicsDemoComponent } from './demos/service-basics.component';
import { InjectionDemoComponent } from './demos/injection.component';
import { SingletonDemoComponent } from './demos/singleton.component';
import { ContainerDemoComponent } from './demos/container.component';
import { SharingDemoComponent } from './demos/sharing.component';
import { ReactivityDemoComponent } from './demos/reactivity.component';
import { StoreDemoComponent } from './demos/store.component';
import { SignalsDemoComponent } from './demos/signals.component';
import { RoutesTableDemoComponent } from './demos/routes-table.component';
import { RouterLinkDemoComponent } from './demos/router-link.component';
import { RouteParamsDemoComponent } from './demos/route-params.component';
import { ActivatedRouteDemoComponent } from './demos/activated-route.component';
import { ProgrammaticNavDemoComponent } from './demos/programmatic-nav.component';
import { RedirectsDemoComponent } from './demos/redirects.component';
import { RouteGateDemoComponent } from './demos/route-gate.component';
import { HttpBasicsDemoComponent } from './demos/http-basics.component';
import { HttpStatesDemoComponent } from './demos/http-states.component';
import { DataServiceDemoComponent } from './demos/data-service.component';
import { CapstoneDataDemoComponent } from './demos/capstone-data.component';
import { CapstoneDemoComponent } from './demos/capstone.component';
import { MenuDemoComponent } from './demos/menu.component';
import { DrawerDemoComponent } from './demos/drawer.component';
import { SelectDemoComponent } from './demos/select.component';
import { SelectFormDemoComponent } from './demos/select-form.component';
import { StepperDemoComponent } from './demos/stepper.component';
import { GridDemoComponent } from './demos/grid.component';
import { MasonryDemoComponent } from './demos/masonry.component';
import { TreeDemoComponent } from './demos/tree.component';
import { TooltipDemoComponent } from './demos/tooltip.component';
import { DividerDemoComponent } from './demos/divider.component';
import { TablesDepthDemoComponent } from './demos/tables-depth.component';
import { BottomNavDemoComponent } from './demos/bottom-nav.component';
import { RefreshDemoComponent } from './demos/refresh.component';
import { InfiniteScrollDemoComponent } from './demos/infinite-scroll.component';
import { SkeletonDemoComponent } from './demos/skeleton.component';
import { RowActionsDemoComponent } from './demos/row-actions.component';
import { FilePickerDemoComponent } from './demos/file-picker.component';
import { MaskDemoComponent } from './demos/mask.component';
import { RatingDemoComponent } from './demos/rating.component';
import { OtpDemoComponent } from './demos/otp.component';
import { CarouselDemoComponent } from './demos/carousel.component';
import { TimelineDemoComponent } from './demos/timeline.component';
import { CalendarDemoComponent } from './demos/calendar.component';
import { AvatarsDemoComponent } from './demos/avatars.component';
import { EmptyStateDemoComponent } from './demos/empty-state.component';
import { ChartsDemoComponent } from './demos/charts.component';
import { EditorDemoComponent } from './demos/editor.component';
import { ImageDemoComponent } from './demos/image.component';
import { ColorPickerDemoComponent } from './demos/color-picker.component';
import { BreadcrumbsDemoComponent } from './demos/breadcrumbs.component';

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
