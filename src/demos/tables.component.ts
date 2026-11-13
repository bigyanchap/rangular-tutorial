import { Component } from '@angular/core';

/**
 * Lesson 23's live demo: tables. The people table takes its
 * rows from the array, both columns are sortable by tapping
 * their headers, and pageSize shows two people per page with
 * a pager. The second table is empty on purpose, to show
 * what emptyText does.
 */
@Component({
  selector: 'app-tables-demo',
  templateUrl: './tables.component.html',
})
export class TablesDemoComponent {
  people = [
    { name: 'Mina', age: 31 },
    { name: 'Arun', age: 25 },
    { name: 'Sita', age: 40 },
    { name: 'Bikash', age: 25 },
    { name: 'Anita', age: 36 },
  ];
  nobody: { name: string; age: number }[] = [];
}
