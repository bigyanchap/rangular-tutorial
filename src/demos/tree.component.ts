import { Component } from '@angular/core';

/**
 * Lesson 73's live demo: a folder tree. Inbox starts
 * expanded, because it carries the expanded seed; Archive
 * starts closed. Tapping a branch header opens or closes
 * it, and the nodes keep that state themselves: this
 * component holds no field for it and has no way to ask
 * which nodes are open. Leaves like Work carry no chevron.
 */
@Component({
  selector: 'app-tree-demo',
  templateUrl: './tree.component.html',
})
export class TreeDemoComponent {}
