import { Injectable } from '@angular/core';

/**
 * The capstone's data layer (lessons 64 and 65): the
 * practice log. Entries and a running total, changed only
 * through add and remove, always by assignment, so every
 * screen that reads the log stays live. One service serves
 * both capstone lessons, so entries added in lesson 64 are
 * still here in lesson 65: the service outlives the screen.
 */
@Injectable({ providedIn: 'root' })
export class PracticeLogService {
  entries: any[] = [];
  total = 0;

  add(name: string, minutes: number) {
    this.entries = [...this.entries, { name: name, minutes: minutes }];
    this.total = this.total + minutes;
  }

  remove(entry: any) {
    this.entries = this.entries.filter((x) => x !== entry);
    this.total = this.total - entry.minutes;
  }
}
