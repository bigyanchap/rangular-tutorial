import { Injectable } from '@angular/core';

/**
 * Lesson 47's second service: a trail of lines, added by
 * assignment so every reader renders again.
 */
@Injectable({ providedIn: 'root' })
export class TrailService {
  lines: string[] = [];

  record(line: string) {
    this.lines = [...this.lines, line];
  }
}
