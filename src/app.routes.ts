import { Routes } from '@angular/router';
import { SplashComponent } from './splash.component';
import { HomeComponent } from './home.component';
import { LessonComponent } from './lesson.component';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lesson/:id', component: LessonComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];
