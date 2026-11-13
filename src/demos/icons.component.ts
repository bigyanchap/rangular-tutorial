import { Component } from '@angular/core';

/**
 * Lesson 20's live demo: icons. The full fixed set, each name
 * checked at compile time, then a few icons at work with sizes
 * and colour roles, and icon buttons that report the last tap.
 */
@Component({
  selector: 'app-icons-demo',
  templateUrl: './icons.component.html',
  styles: [`
    .icon-cell { align-items: center; gap: 4px; padding: 8px; }
    .icon-line { flex-direction: row; align-items: center; gap: 12px; padding: 8px; }
  `],
})
export class IconsDemoComponent {
  names = ['menu', 'search', 'close', 'check', 'chevron-left', 'chevron-right', 'arrow-left', 'arrow-right', 'plus', 'minus', 'bell', 'heart', 'star', 'settings', 'home', 'person', 'calendar', 'alarm', 'play', 'pause', 'edit', 'delete', 'share', 'info', 'warning', 'mail', 'sun'];
  lastTap = '';

  tapIcon(name: string) {
    this.lastTap = name;
  }
}
