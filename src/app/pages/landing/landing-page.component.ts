import {Component, computed, Signal, signal} from '@angular/core';
import {Project, ProjectsData} from '../../data/projects-data';
import { ProjectGalleryComponent } from '../../shared/project-gallery/project-gallery.component';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ProjectGalleryComponent, NgClass],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  readonly projects = ProjectsData;

  protected selectedTag = signal<string>('All Projects');
  protected projectTags = signal<Set<string>>(this.GetProjectTags());
  protected filteredProjects: Signal<Project[]> = computed(() => this.projects.filter((project: Project) => project.projectTags.includes(this.selectedTag()) || this.selectedTag() == 'All Projects'));

  OnTagClicked(tag: string) {
    this.selectedTag.set(tag);
  }

  GetProjectTags() {
    let tags: string[] = this.projects.flatMap(project => project.projectTags);
    tags.unshift('All Projects');
    return new Set(tags);
  }
}
