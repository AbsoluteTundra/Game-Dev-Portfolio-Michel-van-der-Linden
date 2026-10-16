import { Component, computed, input, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../data/projects-data';

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-gallery.component.html',
  styleUrl: './project-gallery.component.css'
})
export class ProjectGalleryComponent implements OnDestroy {
  readonly projectInfo = input.required<Project>();

  readonly currentScreenshotCount = signal(0);
  readonly isProjectSelected = signal(false);
  readonly currentProjectImage = computed(() => {
    const project = this.projectInfo();
    const screenshotIndex = this.currentScreenshotCount();

    return this.isProjectSelected() && screenshotIndex > 0
      ? `${project.projectDirectory}screenshot${screenshotIndex}.jpg`
      : `${project.projectDirectory}logo.jpg`;
  });
  private imageInterval: ReturnType<typeof setInterval> | undefined;

  onSectionEnter(): void {
    if (this.imageInterval !== undefined) {
      return;
    }

    const projectInfo = this.projectInfo();
    this.isProjectSelected.set(true);
    this.currentScreenshotCount.set(0);
    if (!projectInfo.screenshotCount || projectInfo.screenshotCount <= 0) {
      return;
    }

    const screenshotCount = projectInfo.screenshotCount;
    this.imageInterval = setInterval(() => {
      this.currentScreenshotCount.update((currentIndex) =>
        currentIndex + 1 > screenshotCount ? 1 : currentIndex + 1
      );
    }, 1000);
  }

  onSectionLeave(): void {
    this.clearImageInterval();
    this.isProjectSelected.set(false);
    this.currentScreenshotCount.set(0);
  }

  ngOnDestroy(): void {
    this.clearImageInterval();
  }

  private clearImageInterval(): void {
    if (this.imageInterval !== undefined) {
      clearInterval(this.imageInterval);
      this.imageInterval = undefined;
    }
  }
}
