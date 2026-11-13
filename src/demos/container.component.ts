import { Component } from '@angular/core';
import { ReportService } from './report.service';

/**
 * Lesson 49's live demo: the container. This component
 * injects only the report service. The report service
 * injects the counter service, so the counter moves two
 * layers down and this component never names it.
 */
@Component({
  selector: 'app-container-demo',
  templateUrl: './container.component.html',
})
export class ContainerDemoComponent {
  constructor(private report: ReportService) {}

  bump() {
    this.report.bump();
  }
}
