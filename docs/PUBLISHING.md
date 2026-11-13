# Publishing checklist

This app is meant to be published on the Apple App Store and Google
Play for real. This file tracks what store release needs, and what is
already in place.

## Already in place

- App name: Rangular Tutorial
- Version: 1.0.0
- iOS bundle identifier: com.bigyanchap.rangulartutorial
- Android package: com.bigyanchap.rangulartutorial
- Expo SDK 58 pins, matching the store build of Expo Go
- eas.json with development, preview, and production profiles.
  Production uses store distribution and auto increment.
- A standalone repo: clone, npm install, and run, with no dependency
  on a second repo at run time.
- Content complete: all 95 lessons are written, each with a live
  demo, and the app comforts (search, bookmarks, resume, try it
  fields) are in.
- App icon and splash artwork, drawn by script and wired in
  app.json: assets/icon.png (1024 by 1024), assets/adaptive-icon.png
  (the Android adaptive foreground), and assets/splash.png, over the
  splash background colour #1e1e1e. The script is
  assets/generate_artwork.py, so the artwork can be redrawn.
- Store listing drafted in docs/STORE_LISTING.md: name, subtitle,
  short and full descriptions, keywords, category (Education),
  support URL, and privacy answers.

## Needed before store submission (Bigyan's side)

- An EAS account and project id linked in app.json (extra.eas).
  Builds run with: eas build --platform all --profile production
- Apple Developer account (for iOS) and Google Play Console account
  (for Android), both in Bigyan's name.
- Screenshots from a real device, in the sizes each store asks for.
- The submission itself, after a preview build has been tested on
  a real phone.

## Privacy answers (true today)

The app collects no data, has no accounts, no analytics, and no
advertising. Bookmarks and the reader's place are kept on the
device only and keep across restarts.

The app does make a small number of network calls, and the
listings must not claim otherwise: lessons 61 to 63 make real
GET requests to the public JSONPlaceholder practice API
(jsonplaceholder.typicode.com) to teach HTTP, and lessons 89 and
93 load practice photos from picsum.photos. No personal data is
sent in any of these calls. The full answers are written out in
docs/STORE_LISTING.md.

## Order of work

1. Finish lesson batches, checking each on a real phone. (Done:
   the curriculum and the app comforts are complete.)
2. Add icon and splash artwork. (Done, and the listing is
   drafted.)
3. Link the EAS project, run a preview build, and test it.
4. Prepare listings and screenshots. (Listings drafted;
   screenshots still need a real device.)
5. Submit production builds to both stores.
