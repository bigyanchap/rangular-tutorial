import { Injectable } from '@angular/core';

/**
 * Lesson 48's shared notebook: one root service, written by
 * one component and read by another, to prove both hold the
 * same instance.
 */
@Injectable({ providedIn: 'root' })
export class NotebookService {
  lines: string[] = [];

  add(line: string) {
    this.lines = [...this.lines, line];
  }
}
