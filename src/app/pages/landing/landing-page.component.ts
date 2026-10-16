import { Component } from '@angular/core';
import { ProjectsData } from '../../data/projects-data';
import { ProjectGalleryComponent } from '../../shared/project-gallery/project-gallery.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ProjectGalleryComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  readonly projects = ProjectsData;
}
