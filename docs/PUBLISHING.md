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

## Needed before store submission

- App icon artwork (1024 by 1024) and splash artwork, added to
  app.json. Binary artwork must be uploaded carefully and verified,
  never pushed as text.
- An EAS account and project id linked in app.json (extra.eas).
  Builds run with: eas build --platform all --profile production
- Apple Developer account (for iOS) and Google Play Console account
  (for Android), both in Bigyan's name.
- Store listings: short and full description, keywords, category
  (Education), screenshots from a real device, and a support URL.
- Privacy answers: this app collects no data, stores nothing, and
  makes no network calls in the tutorial build. The listings should
  say exactly that.
- Content complete enough for review: Apple reviews the actual app.
  The lesson batches should be substantially complete before
  submission, so reviewers and first users get a full tutorial, not
  a shell.

## Order of work

1. Finish lesson batches, checking each on a real phone.
2. Add icon and splash artwork.
3. Link the EAS project, run a preview build, and test it.
4. Prepare listings and screenshots.
5. Submit production builds to both stores.
