import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing/landing-page.component';
import { ProjectPageComponent } from './pages/project/project-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: ':projectTitle', component: ProjectPageComponent },
  { path: '**', component: ProjectPageComponent }
];
