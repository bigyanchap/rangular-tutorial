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
build carries the complete tutorial: splash screen, lesson engine,
lessons 1 to 95, and the app comforts: search across lessons,
bookmarks, resume where you left off, and try it fields in the
most hands on lessons.

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
- Home: a search field over all 95 lessons (title, subtitle, and
  explanation; the result rows open their lessons, and clearing
  the search restores the groups), a continue row that reopens
  the last lesson you read, a bookmarks group, and the lesson
  list in six groups (lessons 1 to 5, lessons 6 to 25, lessons
  26 to 45, lessons 46 to 65, lessons 66 to 76, then lessons
  77 to 95), with a how to use card and a coming next card.
  About lives in the menu now, not in a list on Home.
- Search, bookmarks, and resume: every lesson's header card
  carries a bookmark toggle, and a root bookmarks service holds
  the bookmarked lessons and the last opened lesson for Home.
  That state is saved on the device, so bookmarks and your
  place keep across restarts. Nothing is sent anywhere.
- Try it fields: lessons 3, 8, 15, 16, 25, 84, and 91 carry a
  field labelled Try it inside the demo, prefilled with the
  demo's starting value and driving the demo live as you type
  or slide: your name in the greeting, your own line in three
  styles, a price for the currency pipes, minutes for the
  duration pipe, the themed panel's heading, the rating from a
  value, and Wednesday's minutes in all three charts.
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
  8. Class and style bindings: a [class.name] toggle over
     component styles, and named classes swapped with ngIf (the
     whole object forms warn instead of applying, and the lesson
     says so plainly)
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
- Lessons 26 to 45 (Batch 2: forms and interaction), in the same
  layout, each with a live demo component:
  26. Template driven forms with ngModel: name and city fields,
      and a greeting built from the fields
  27. The input block: text, email, number, and password fields,
      with the email field disablable
  28. Validators required, minlength, maxlength: a username with
      a live character count and rule messages with numbers
  29. Validators email and pattern: an email shape check and a
      four digit code
  30. Form state: value, valid, touched, and the errors object
      printed live as JSON
  31. Showing errors well: the [error] slot, a gated error line,
      and a status line restyled by a [class.name] toggle
  32. Submitting a form: a submit button gated by the refs, and
      a Clear button that keeps its own click
  33. Reactive FormControl: one control in a one control group,
      its state read live (there is no [formControl] binding
      yet, and the lesson says so plainly)
  34. Reactive FormGroup: a profile form whose group value
      prints live as JSON
  35. Reactive validators and group state: rules in code, and a
      group state panel
  36. Setting values from code: fill and clear buttons using
      setValue, and a counter fed by valueChanges
  37. Date pickers: start and end day wheels for a trip
  38. Time and datetime pickers: a time wheel on five minute
      steps, and the combined datetime mode
  39. Bottom sheets: a sort order sheet with a radio group
      inside
  40. Dialogs: a delete confirmation with an actions row
  41. SnackBar messages with actions: a plain save message, and
      delete with Undo
  42. Autocomplete inputs: folder suggestions on an ordinary
      input
  43. Sliders: brightness on steps of 5, focus minutes on steps
      of 15
  44. Choice controls in a form: a preferences form saved under
      one summary
  45. A complete form: sign up, with validators, a terms
      checkbox, a gated submit, and a SnackBar after the save
- Lessons 46 to 65 (Batch 3: services, routing, and data), in
  the same layout, each with a live demo component:
  46. Services: a QuoteService the component only reads and
      advances
  47. Constructor injection: two services handed in, both used
      by one tap
  48. providedIn root: a writer and a reader component sharing
      one notebook service, with nothing passed between them
  49. The container: a report service injecting a counter
      service, the component knowing only the top layer
  50. Sharing state between components: an editor and a
      greeter sibling, wired only by a profile service
  51. Updating service state: a quiet mutation the screen
      never shows, beside a proper assignment that shows at
      once
  52. A service as the store: a quote browser saving into a
      favourites service, a second component reading it
  53. Signals: no signal() here, stated plainly; a minutes
      field in a service and a derived hours text read by a
      method, the pattern Rangular offers today
  54. Routes and the outlet: this app's own route table, with
      real links out of the lesson
  55. routerLink: rows carrying array links to real lessons,
      and a string link to About
  56. Route parameters: rows sending different numbers into
      the one lesson/:id entry, and a button reopening the
      lesson itself
  57. ActivatedRoute: a demo reading this lesson's own id
      from the snapshot and from paramMap, counting emissions
  58. Programmatic navigation: type a lesson number and a
      method navigates there; navigateByUrl and navigate to
      fixed places beside it
  59. Redirects and the wildcard: a button opening a path that
      does not exist, and one opening the root path, both
      leaving the lesson on purpose
  60. What routing does not do yet: the limits stated plainly,
      and a diary gate demoing the check before you navigate
  61. HttpClient: a real GET to a public practice API, with
      loading and error arrows (in the browser preview the
      client is a stub and the demo waits at Loading, and the
      lesson says so)
  62. Loading, error, and data: a user list that loads on
      open, with a spinner, a retry on failure, and rows on
      success
  63. Data services: a UserService owning the request and the
      state, paged through three users by a component that
      only reads
  64. Capstone part 1: a practice log service with quick add
      buttons and a reading list, the data layer only
  65. Capstone part 2: the practice log whole: a name input,
      minute choice buttons, a gated add, a remove per entry,
      the running total, and a toast; entries from lesson 64
      are still there, because the service outlives the screen
- Lessons 66 to 76 (Batch 4: the Material pieces), in the
  same layout, each with a live demo component:
  66. Menu: a message actions panel whose items run, report
      the pick below, and close the menu; a divider stands
      before Delete
  67. Drawer: a mailbox panel whose three section buttons
      set the section on the screen behind and close it
  68. Select: a city picker starting on its placeholder,
      showing the picked option code below
  69. Select in a form: a visit form where the select joins
      an ngModel input and a switch, and the gated save reads
      the stored field
  70. Stepper: scheduling a practice in three steps, moved
      by header taps, by pick buttons, and by Back and
      Continue alike
  71. Grid list: four place tiles in two columns, then three
      short tiles in three columns
  72. Grid list, masonry mode: six day tiles of very uneven
      heights, dealt into two stacks so they stagger
  73. Tree: a folder tree three levels deep, Inbox starting
      expanded from its seed, Archive closed
  74. Tooltip: one long press hint on each pressable host:
      a button, a row, and an icon button, with taps recorded
  75. Divider: a morning routine in three groups, held apart
      by two hairlines and nothing else
  76. Tables in depth: a sortable, paged table over a list
      that renders the bound array in its own order below,
      proving the array never moves while you sort
- Lessons 77 to 95 (Batch 5: beyond Angular), in the same
  layout, each with a live demo component:
  77. Bottom navigation: a small screen whose three panels
      follow the bar pinned under it, one item badged
  78. Pull to refresh: a list whose refresh prepends a fresh
      note and counts the pulls
  79. Infinite scroll: a reading list whose next page appends
      at the end, with a done line and a reset
  80. Skeleton: a profile card traded with its skeleton shape
      by one loading flag
  81. Swipe row actions: an inbox where Star reports below
      and Delete really removes the row
  82. File picker: a photo pick reported by name, and a
      multiple document pick listed as rows (on the phone the
      real pickers open; in the preview the browser picker
      stands in, and the lesson says so)
  83. Input masks: a phone field and a member code, formatted
      as you type, the formatted string as the value
  84. Rating: stars whose number names a verdict word below
  85. The OTP input: six digit boxes with a progress line and
      a clear button
  86. Carousel: three teaching cards paged by swipe, dots,
      and chevrons
  87. Timeline: one morning in three entries on a dotted rail
  88. Calendar: a month view whose tapped day prints as an
      ISO string, with the seed day restored by a button
  89. Avatars and avatar groups: five people folded at three,
      then initials and a photo standing alone
  90. Empty state: an inbox that starts empty, loads, and
      clears back to nothing
  91. Charts: one week of minutes as bar, line, and pie over
      a single array the buttons change
  92. Editor: marked text with bold, italic, and list lines,
      and a button that appends a line
  93. Images and the lightbox: a web photo at a declared size
      that opens full screen with a caption
  94. Colour picker: a hex value with a swatch, a palette
      sheet, and a reset to the starting blue
  95. Breadcrumbs: a three crumb path whose first two crumbs
      switch a place line, the last one plain
- About screen: what the app is, how the tutorial grows, and the
  store plan. Reached from the drawer on Home; its back chevron
  returns to Home, like the lesson screens.
- Store ready foundation: app name Rangular Tutorial, bundle id and
  package `com.bigyanchap.rangulartutorial`, and an `eas.json` with
  development, preview, and production store profiles. The icon,
  Android adaptive icon, and splash artwork are drawn and wired
  in app.json from `assets/`, and the store listing is drafted in
  `docs/STORE_LISTING.md`; the store accounts, screenshots, and
  submission remain, see `docs/PUBLISHING.md`.

## How the pieces fit

| Path | What it is |
|---|---|
| `src/*.component.ts` and `src/*.component.html` | The Angular style source. This is what you edit. |
| `src/demos/` | One small component per lesson demo. A future lesson adds its demo as a new file here and hosts it from the lesson screen; the lesson component itself holds no demo state. |
| `src/lesson.service.ts` | Lesson data: title, subtitle, explanation, code sample, best practice tip. New lessons are added here. |
| `src/bookmarks.service.ts` | Bookmarks and the last opened lesson, saved on the device for Home's bookmarks group and continue row. |
| `assets/` | The store artwork (icon, adaptive icon, splash) and the script that draws it. |
| `docs/STORE_LISTING.md` | The store listing: descriptions, keywords, category, support URL, and privacy answers. |
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
