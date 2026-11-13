# Rangular Tutorial

Learn Rangular the way W3Schools teaches the web: short lessons in order,
each with a plain explanation, a Code block, a live demo, and a best
practice on the same screen.

Rangular is simple to say: write Angular, run native. You write
components in TypeScript with HTML templates, the Angular way, and
Rangular compiles them into React Native code that runs on iOS and
Android.

This app is built with the Rangular framework itself. Every screen, starting with the
splash screen, began as Angular style source in `src/` and was compiled
into `src/AppRoot.tsx`. The tutorial is also the test: if Rangular has a
gap, this app will find it.

This app will be published on the App Store and Google Play. This
build carries the foundation: splash screen, lesson engine, and
lessons 1 to 25.

## Run it on your Mac and phone

You need Node.js 20 or newer and Expo Go on your phone. The Expo Go in
the stores today works with Expo SDK 58, and this app uses SDK 58.

```sh
git clone https://github.com/bigyanchap/rangular-tutorial.git
cd rangular-tutorial
npm install
npx expo start
```

Scan the QR code with Expo Go. The app opens on the splash screen.
Tap Start learning to reach the lesson list.

That is all. This repo is standalone: the Rangular UI and runtime
packages are vendored under `vendor/`, so you do not need the Rangular
repo cloned to run the tutorial.

## What is in this build

- App shell: every content screen (Home, Lesson, About) carries the
  app bar with the title Rangular Tutorial centered at the app bar's
  natural title size. Home's app bar has the menu icon at the left;
  it opens a drawer with navigation to Home and About, and a footer
  line naming the framework version the app runs on (Rangular
  framework 0.1.2). The Splash screen has no app bar, by design.
- Splash screen: what Rangular is and what this app is, in two short
  cards, with a Start learning button.
- Home: the lesson list in two groups (lessons 1 to 5, then
  lessons 6 to 25), with a how to use card and a coming next card.
  About lives in the menu now, not in a list on Home.
- Lessons 1 to 5, each with the same layout: a header card with the
  explanation, a Code section showing the lesson's code in the
  framework's editor styled code block, a live demo where the topic
  can be shown, and a Best practice section as plain text in the
  screen flow, never inside a card:
  1. Introduction (no demo component: the app itself is the proof)
  2. Your first component, with a live demo that is a real child
     component rendered by its own tag
  3. Interpolation, with a type-and-mirror demo: type in the box
     and the greeting below shows it at the same time
  4. Event binding, with a live counter demo and a button whose
     tap shows a toast reading Button clicked!
  5. Property binding and ngIf, with a live counter and disabled
     button demo
- Lessons 6 to 25 (Batch 1: components and templates), in the same
  layout, each with a live demo component:
  6. ngFor and lists: add and remove items, the rows follow the array
  7. ngIf in depth: a sign in panel built from the opposite pair
     (Rangular does not generate else branches yet, and the lesson
     says so plainly)
  8. Class and style bindings: named classes swapped with ngIf
     (dynamic class and style bindings are not wired yet, and the
     lesson says so plainly)
  9. Child components: three tiles, each with its own count
  10. Inputs: a greeting card fed by parent fields
  11. Outputs and EventEmitter: quote cards reporting saves up
  12. Component lifecycle: a stamp whose ngOnInit and ngOnDestroy
      write into a visible log
  13. Content projection: one panel frame, two parent written
      fillings (single slot only)
  14. Template reference variables: an ngModel ref read live
  15. Built in pipes: date, number, percent, currency, slice, case
  16. Custom pipes: a duration pipe over a minutes counter
  17. Attribute directives: a highlight directive, static and bound
  18. Switch and checkbox controls: a small settings panel
  19. Radio groups and switchers: view toggle and text size
  20. Icons: the full 27 name set, sizes, roles, and icon buttons
  21. Cards, lists, and rows: a small inbox corner
  22. Tabs and accordion: a two tab mailbox with folding panels
  23. Tables: sortable columns, paging, and an empty table
  24. Chips, badges, and progress: filters, counts, a storage bar,
      and a sync spinner
  25. Theming: a small screen bound light and dark by one switcher
- About screen: what the app is, how the tutorial grows, and the
  store plan. Reached from the drawer on Home; its back chevron
  returns to Home, like the lesson screens.
- Store ready foundation: app name Rangular Tutorial, bundle id and
  package `com.bigyanchap.rangulartutorial`, and an `eas.json` with
  development, preview, and production store profiles.

## How the pieces fit

| Path | What it is |
|---|---|
| `src/*.component.ts` and `src/*.component.html` | The Angular style source. This is what you edit. |
| `src/demos/` | One small component per lesson demo. A future lesson adds its demo as a new file here and hosts it from the lesson screen; the lesson component itself holds no demo state. |
| `src/lesson.service.ts` | Lesson data: title, subtitle, explanation, code sample, best practice tip. New lessons are added here. |
| `src/app.routes.ts` | The routes: splash, home, lesson/:id, about. |
| `src/AppRoot.tsx` | Generated by the Rangular compiler. Never edit by hand. |
| `App.tsx` | The Expo entry point. It renders AppRoot. |
| `vendor/rangular-ui` and `vendor/rangular-runtime` | The Rangular packages, copied from the Rangular repo (Apache 2.0, see `vendor/LICENSE.rangular`). |
| `preview.html` | A browser preview of the app, generated by Rangular. Open it on a computer to click through the screens without a phone. |
| `docs/ROADMAP.md` | The lesson plan: Angular documentation topics mapped to Rangular batches of about twenty lessons. |
| `docs/PUBLISHING.md` | The store publishing checklist and what is still needed before submission. |

## Recompile after editing the source

Running the app needs nothing but this repo. Recompiling after you edit
a file in `src/` needs a clone of the Rangular repo beside it:

```sh
git clone https://github.com/bigyanchap/rangular.git
cd rangular
npm install
npm test
node dist/packages/cli/src/cli.js build ../rangular-tutorial/src/app.component.ts --out ../rangular-tutorial/src/AppRoot.tsx
```

Run that from the Rangular repo folder, then restart Expo in the
tutorial folder. In normal use, leave recompiling to the build process:
each delivered batch arrives with its compiled `AppRoot.tsx` included.

## Rules this app follows

- No em dashes in any file. Plain sentences, commas, and periods.
- The lesson layout is fixed: header card with the explanation, a
  section headed Code with the code in the editor styled code
  block, the live demo, and a section headed Best practice as
  plain text, not inside a card. The headings are exactly Code
  and Best practice.
- The live demo rule: whenever a topic can be shown, the lesson
  shows it working, never only describes it. Each demo is its own
  component under `src/demos/`. A lesson gets no demo only when
  the topic honestly cannot be shown, and that is stated, not
  papered over with a fake demo.
- Only meaningful buttons: everything in the app bar and the
  drawer works. Back navigation is the simple back chevron.
- A capability is only taught after Rangular supports it and this app
  uses it on a real screen.
- Fixes are classified honestly: if a problem is in this app, it is
  fixed here. If a problem is in Rangular itself, it is fixed in the
  Rangular repo, with tests, and the vendored packages here are
  refreshed.

## License

Apache 2.0, the same license as Rangular. Copyright 2026 Bigyan
Chapagain.
