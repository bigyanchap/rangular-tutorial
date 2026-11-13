import { Injectable } from '@angular/core';

/**
 * Lesson 12's shared notebook: a root service both the demo and
 * its stamp child write into, so lifecycle calls made inside the
 * child become visible in the parent demo below it.
 */
@Injectable({ providedIn: 'root' })
export class LifecycleLogService {
  entries: string[] = [];
}
