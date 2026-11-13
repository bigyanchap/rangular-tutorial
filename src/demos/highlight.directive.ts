import { Directive, ElementRef, Input } from '@angular/core';

/**
 * Lesson 17's attribute directive, in the supported beginner
 * subset: inputs, an injected ElementRef, and one style
 * assignment in ngOnInit. The compiler folds the style into
 * the host block; no directive object exists at runtime.
 */
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() defaultColor = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight || this.defaultColor || 'transparent';
  }
}
