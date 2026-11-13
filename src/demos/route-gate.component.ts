import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBar } from '@angular/material/snack-bar';

/**
 * Lesson 60's live demo: the check before you navigate, the
 * pattern that does a guard's everyday job today. The switch
 * holds the signed in state. The button is an opposite pair
 * from lesson 7: signed in, it navigates; signed out, the
 * same label only warns. The About screen plays the diary,
 * so the navigation is real and visible.
 */
@Component({
  selector: 'app-route-gate-demo',
  templateUrl: './route-gate.component.html',
})
export class RouteGateDemoComponent {
  signedIn = false;

  constructor(
    private router: Router,
    private snack: SnackBar,
  ) {}

  onSignedIn(value: boolean) {
    this.signedIn = value;
  }

  warn() {
    this.snack.open('Sign in first. The diary stays closed.');
  }

  openDiary() {
    this.router.navigate(['/about']);
  }
}
