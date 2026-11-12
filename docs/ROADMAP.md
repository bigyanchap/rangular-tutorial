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
- Lesson engine: routes, lesson service, lesson screen with live
  demo slots.
- Lessons 1 to 5: introduction, first component, interpolation,
  event binding, property binding and ngIf.

## Batch 1: lessons 6 to 25 (next)

Planned from Angular topics: components and templates.

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

## Batch 2: lessons 26 to 45 (planned)

Forms and interaction, from the Angular forms documentation.

- Template driven forms with ngModel
- Validators: required, minlength, email, pattern
- Form state: valid, touched, errors
- Reactive forms: FormControl and FormGroup
- Form submit and error display
- Date and time pickers
- Bottom sheets and dialogs
- SnackBar messages with actions
- Autocomplete inputs
- Sliders

## Batch 3: lessons 46 to 65 (planned)

Services, routing, and data, from the Angular documentation on
dependency injection, routing, and HTTP.

- Services and dependency injection
- providedIn root and the container
- Routing in depth: routes, routerLink, parameters
- ActivatedRoute and programmatic navigation
- HttpClient over fetch
- Signals and reactive services
- Building a small real app, lesson by lesson, as the capstone

## After the batches

- Search across lessons
- Bookmarks and resume where you left off
- A try it editor pattern for the most common lessons
- Store release: icons, splash artwork, screenshots, and listings
  (see docs/PUBLISHING.md)
