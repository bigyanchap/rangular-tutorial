# Tutorial roadmap

The tutorial follows the official Angular documentation, topic by
topic. For each Angular topic, the tutorial teaches the Rangular
equivalent: what is the same, what is different on mobile, and what is
not supported yet, stated plainly.

Lessons ship in batches of about twenty. Each batch is delivered,
run on a real phone, and checked before the next batch starts.
Problems found while checking are classified: tutorial app problems
are fixed in this repo, Rangular problems are fixed in the Rangular
repo with tests.

## Batch 0: the basic app (done)

- Splash screen: what Rangular is, what this app is.
- App shell: a centered app bar title on every content screen,
  a menu drawer on Home holding Home and About, and the back
  chevron on the lesson and About screens.
- Lesson engine: routes, lesson service, and the lesson screen in
  its fixed layout (header card, Code block, live demo, Best
  practice section). Each lesson's demo is its own component
  under `src/demos/`.
- Lessons 1 to 5: introduction, first component, interpolation,
  event binding, property binding and ngIf.

## Batch 1: lessons 6 to 25 (written)

1. ngFor and lists
2. ngIf in depth, with else cases stated honestly
3. Class and style bindings
4. Child components
5. Inputs: passing data down
6. Outputs and EventEmitter: sending events up
7. Component lifecycle: ngOnInit and friends
8. Content projection with ng-content
9. Template reference variables
10. Built in pipes: date, number, currency, slice
11. Custom pipes
12. Attribute directives
13. Switch and checkbox controls
14. Radio groups and switchers
15. Icons
16. Cards, lists, and rows: the layout blocks
17. Tabs and accordion
18. Tables and data display
19. Chips, badges, and progress
20. Theming with design tokens, light and dark

All twenty lessons are written, each with a live demo component
under `src/demos/`. Two framework gaps were found while writing
and are taught honestly in their lessons: ngIf else branches are
not generated yet (GEN_NGIF_ELSE_TODO), so lesson 7 teaches the
opposite-pair pattern; and dynamic class and style bindings
were then inert, so lesson 8 taught named classes in component
styles, swapped with ngIf. The framework gap fix has since wired
the [class.name] toggle and made the remaining forms warn
(GEN_CLASS_BINDING, GEN_STYLE_BINDING), and lesson 8 now teaches
both the toggle and the swap. Content projection (lesson 13)
teaches the single slot that is supported.

## Batch 2: lessons 26 to 45 (written)

Forms and interaction, from the Angular forms documentation.

1. Template driven forms with ngModel
2. The input block: types, labels, placeholders, and disabled
3. Validators: required, minlength, maxlength
4. Validators: email and pattern
5. Form state: valid, touched, errors
6. Showing errors well: the [error] slot, gated lines, class toggles
7. Form submit and error display
8. Reactive forms: FormControl
9. Reactive forms: FormGroup and formControlName
10. Reactive validators and group state
11. Setting values from code: setValue and valueChanges
12. Date pickers
13. Time and datetime pickers
14. Bottom sheets
15. Dialogs and confirmations
16. SnackBar messages with actions
17. Autocomplete inputs
18. Sliders
19. Choice controls in a form
20. A complete form: sign up, as the batch capstone

All twenty lessons are written, each with a live demo component
under `src/demos/`. The framework limits are taught honestly in
their lessons: there is no NgForm object, so lesson 32 gates the
submit button with the field refs; there is no [formControl]
binding, so lesson 33 binds its lone control through a one
control FormGroup; there are no group level validators, no
FormArray, and no FormBuilder, so lesson 35 reads group validity
as all controls valid; and there is no reset or patchValue, so
lesson 36 fills and clears with setValue per control.
Autocomplete (lesson 42) takes string options only.

## Batch 3: lessons 46 to 65 (written)

Services, routing, and data, from the Angular documentation on
dependency injection, routing, and HTTP.

1. Services: shared work in one place
2. Constructor injection
3. providedIn root: one instance for the whole app
4. The container: dependency order, services using services
5. Sharing state between components
6. Updating service state: assign, do not mutate
7. A service as the store
8. Signals: the Angular idea, the Rangular way
9. Routes and the outlet
10. routerLink: string and array forms
11. Route parameters
12. ActivatedRoute: snapshot and paramMap
13. Programmatic navigation with the Router service
14. Redirects and the wildcard route
15. What routing does not do yet
16. HttpClient: a real GET over fetch
17. Loading, error, and data: request states
18. Data services: HTTP behind a service
19. Capstone, part 1: the practice log service
20. Capstone, part 2: the practice log, whole

All twenty lessons are written, each with a live demo component
under `src/demos/`. The demos for the routing lessons navigate
inside this app's real routes, and the HTTP demos make real
requests to a public practice API (JSONPlaceholder). The
framework limits are taught honestly in their lessons: Angular
signals are not compiled yet, so lesson 53 teaches the field
and derived method pattern Rangular offers today; DI has no
provider arrays, useClass or useValue swaps, or injection
tokens, and unknown tokens and dependency cycles are build
errors (DI_UNKNOWN_TOKEN, DI_CYCLE); the reactivity contract
is assignment, so lesson 51 shows a mutation that leaves the
screen stale next to an assignment that updates it; routing
has no guards, resolvers, lazy loading, child routes, or
routerLinkActive, and an entry using one is a
GEN_ROUTE_UNSUPPORTED error, so lesson 60 teaches the check
before you navigate pattern; paramMap emits the plain params
object (read as params.id, not a ParamMap with .get), and a
parameter only change remounts the component; HttpClient is
an Observable-lite with subscribe only, and in the browser
preview it is a stub that never answers, which lessons 61 to
63 state plainly.

## After the batches

- Search across lessons
- Bookmarks and resume where you left off
- A try it editor pattern for the most common lessons
- Store release: icons, splash artwork, screenshots, and listings
  (see docs/PUBLISHING.md)
