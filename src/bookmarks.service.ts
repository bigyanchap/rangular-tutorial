import { Injectable } from '@angular/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Bookmarks and resume state: one root instance for the whole
 * app. The lesson screen records the last opened lesson here
 * and toggles bookmarks here; Home reads both to draw its
 * continue row and its bookmarks group.
 *
 * The state is saved on the device with AsyncStorage, so
 * bookmarks and the last lesson keep across restarts. The
 * load runs when the service is made: it reads the saved
 * value and assigns both fields when it arrives. Every
 * change saves again, by assignment, in the same call.
 * Nothing leaves the device.
 */
@Injectable({ providedIn: 'root' })
export class BookmarksService {
  bookmarkIds: number[] = [];
  lastLessonId = 0;
  storageKey = 'rangular-tutorial.progress.v1';

  constructor() {
    AsyncStorage.getItem(this.storageKey).then((raw) => {
      if (raw) {
        const saved = JSON.parse(raw);
        this.bookmarkIds = saved.bookmarkIds;
        this.lastLessonId = saved.lastLessonId;
      }
    });
  }

  save() {
    AsyncStorage.setItem(
      this.storageKey,
      JSON.stringify({
        bookmarkIds: this.bookmarkIds,
        lastLessonId: this.lastLessonId,
      }),
    );
  }

  recordLast(id: number) {
    this.lastLessonId = id;
    this.save();
  }

  isBookmarked(id: number) {
    return this.bookmarkIds.indexOf(id) >= 0;
  }

  toggle(id: number) {
    if (this.isBookmarked(id)) {
      this.bookmarkIds = this.bookmarkIds.filter((x) => x !== id);
    } else {
      this.bookmarkIds = [...this.bookmarkIds, id];
    }
    this.save();
  }
}
